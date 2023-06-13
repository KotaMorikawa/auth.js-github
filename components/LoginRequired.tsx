"use client";

import { useSession, signIn, signOut } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

const LoginRequired = ({ children }: Props) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return;
  }

  return <>{session && <>{children}</>}</>;
};

export default LoginRequired;
