import { signIn, useSession } from "next-auth/react";
import React, { memo } from "react";
import Container from "./Container";

const LoggedOUTBanner = (): JSX.Element | null => {
  const { data: session } = useSession();
  if (session) {
    return null;
  }
  return (
    <div className="fixed bottom-0 w-full bg-primary p-4">
      <Container className="flex justify-between bg-transparent">
        <p className="text-white">Do not miss out</p>
        <div>
          <button
            className="px-4 py-2 text-white shadow-md"
            type="button"
            onClick={() => signIn()}
          >
            Login
          </button>
        </div>
      </Container>
    </div>
  );
};
export default memo(LoggedOUTBanner);
