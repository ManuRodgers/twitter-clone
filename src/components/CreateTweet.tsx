import { trpc } from "@/utils/trpc";
import React, { memo, useState } from "react";
import { z } from "zod";

export const tweetSchema = z.object({
  text: z.string({ required_error: "Tweet text is required" }).min(10).max(280),
});

const CreateTweet = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const { mutateAsync } = trpc.tweet.create.useMutation();
  return (
    <>
      {error && JSON.stringify(error)}
      <form
        className="mb-4 flex w-full flex-col rounded-sm border-2 p-4"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await tweetSchema.parse({ text });
          } catch (error: unknown) {
            setError(error.message);
            return;
          }

          await mutateAsync({ text });
        }}
      >
        <textarea
          className="w-full p-4 shadow"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-yellow-50"
          >
            Tweet
          </button>
        </div>
      </form>
    </>
  );
};

export default memo(CreateTweet);
