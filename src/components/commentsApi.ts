// commentsApi.ts
import { createApi } from '@reduxjs/toolkit/query/react';

interface Comment {
  id: number;
  text: string;
  isApproved: boolean;
}

// Use "let" if you're creating new arrays to avoid freezing errors
let fakeComments: Comment[] = [
  { id: 1, text: 'First comment', isApproved: true },
  { id: 2, text: 'Second comment', isApproved: true },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockBaseQuery = async ({ url, method, body }: any) => {
  if (url === 'comments') {
    if (method === 'POST') {
      const newComment = {
        id: fakeComments.length + 1,
        ...body,
      };
      // Reassign with a copy to avoid in-place mutations
      fakeComments = [...fakeComments, newComment];
      return { data: newComment };
    }

    if (method === 'PATCH') {
      const { id, ...updatedFields } = body;
      const commentIndex = fakeComments.findIndex((c) => c.id === id);
      if (commentIndex !== -1) {
        const updatedComment = {
          ...fakeComments[commentIndex],
          ...updatedFields,
        };
        fakeComments = [
          ...fakeComments.slice(0, commentIndex),
          updatedComment,
          ...fakeComments.slice(commentIndex + 1),
        ];
        return { data: updatedComment };
      }
      return { error: { status: 404, data: 'Not Found' } };
    }

    // GET
    return { data: fakeComments };
  }

  return { error: { status: 404, data: 'Not Found' } };
};

// Add "tagTypes", then specify providesTags and invalidatesTags
export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: mockBaseQuery,
  tagTypes: ['Comment'],       // <--- Declare tag type(s)
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => ({ url: 'comments', method: 'GET' }),
      providesTags: (result) =>
        // Provide a tag for each comment, so we can invalidate specific ones
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comment' as const, id })),
              { type: 'Comment' as const, id: 'LIST' },
            ]
          : [{ type: 'Comment', id: 'LIST' }],
    }),

    addComment: builder.mutation<Comment, Partial<Comment>>({
      query: (newComment) => ({
        url: 'comments',
        method: 'POST',
        body: newComment,
      }),
      // Invalidate the LIST so getComments is re-fetched or updated
      invalidatesTags: [{ type: 'Comment', id: 'LIST' }],
    }),

    updateComment: builder.mutation<Comment, Partial<Comment>>({
      query: ({ id, ...patch }) => ({
        url: 'comments',
        method: 'PATCH',
        body: { id, ...patch },
      }),
      // Invalidate the specific comment ID so the cache can update
      invalidatesTags: (result, error, { id }) => [{ type: 'Comment', id }],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
} = commentsApi;
