import { trpcRouter, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = trpcRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
