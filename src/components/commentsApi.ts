// commentsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Comment {
  id: number;
  text: string;
  isApproved: boolean;
}

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => 'comments',
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
