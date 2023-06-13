"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  if (status == "loading") {
    return (
      <div className="h-14 bg-slate-400 flex items-center justify-end">
        <p>Loding...</p>
      </div>
    );
  }

  const Logined = () => {
    return (
      <>
        <div className="absolute right-2">
          <button
            className="border-green-600 border-2"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </>
    );
  };

  const NotLogin = () => {
    return (
      <>
        <div className="absolute right-2">
          <button className="border-blue-600 border-2" onClick={() => signIn()}>
            Sign in
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="h-14 bg-slate-400 flex justify-center items-center relative">
        <p className="border-2 border-red-500">Title Name</p>
        {session ? Logined() : NotLogin()}
      </div>
    </>
  );
};

export default Header;
