import type { FC } from "react";
import React, { memo } from "react";
import CreateTweet from "./CreateTweet";
import { trpc } from "@/utils/trpc";
import Tweet from "./Tweet";

type TimelineProps = { where?: string };

const Timeline: FC<TimelineProps> = ({ where }): JSX.Element => {
  const { data } = trpc.tweet.timeline.useQuery({ limit: 1 });
  return (
    <div>
      <CreateTweet />
      {data?.tweets?.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};
export default memo(Timeline);
