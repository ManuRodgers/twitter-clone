import type { RouterOutputs } from "@/utils/trpc";
import Image from "next/image";
import type { FC } from "react";
import React, { memo } from "react";

type TweetProps = {
  tweet: RouterOutputs["tweet"]["timeline"]["tweets"][number];
};

const Tweet: FC<TweetProps> = ({ tweet }): JSX.Element => {
  return (
    <div>
      <div>
        {tweet.user.image && (
          <Image
            src={tweet.user.image}
            alt={`${tweet.user.name} profile picture`}
            width={48}
            height={48}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
};
export default memo(Tweet);
