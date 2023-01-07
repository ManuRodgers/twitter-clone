import type { FC, PropsWithChildren, ComponentProps } from "react";
import React, { memo } from "react";

type ContainerProps = {
  className?: ComponentProps<"div">["className"];
} & PropsWithChildren;

const Container: FC<ContainerProps> = ({
  className,
  children,
}): JSX.Element => {
  return (
    <div className={`m-auto max-w-xl bg-slate-200 ${className}`}>
      {children}
    </div>
  );
};
export default memo(Container);
