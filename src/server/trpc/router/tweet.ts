import {
  protectedProcedure,
  publicProcedure,
  trpcRouter,
} from "@/server/trpc/trpc";
import { tweetSchema } from "@/components/CreateTweet";
import { z } from "zod";

export const tweetRouter = trpcRouter({
  create: protectedProcedure.input(tweetSchema).mutation(({ ctx, input }) => {
    const { prisma, session } = ctx;
    const { text } = input;
    const userId = session.user.id;
    return prisma.tweet.create({
      data: {
        text,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }),
  timeline: publicProcedure
    .input(
      z.object({
        cursor: z.string().nullish(),
        limit: z.number().min(1).max(100).default(10),
      })
    )
    .query(async ({ ctx: { prisma }, input: { limit, cursor } }) => {
      const tweets = await prisma.tweet.findMany({
        take: limit + 1,
        orderBy: [{ createdAt: "desc" }],
        include: {
          user: {
            select: {
              id: true,
              image: true,
              name: true,
            },
          },
        },
      });
      console.log("tweets: ", tweets);
      return { tweets };
    }),
});
