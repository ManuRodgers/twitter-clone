import { tweetRouter } from "@/server/trpc/router/tweet";
import { authRouter } from "@/server/trpc/router/auth";
import { trpcRouter } from "@/server/trpc/trpc";

export const appRouter = trpcRouter({
  auth: authRouter,
  tweet: tweetRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
