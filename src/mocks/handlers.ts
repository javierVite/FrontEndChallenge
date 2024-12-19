// mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('/comments', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, text: 'First Comment', isApproved: false },
        { id: 2, text: 'Second Comment', isApproved: true },
        { id: 3, text: 'Third Comment', isApproved: false },
      ])
    );
  }),
];
