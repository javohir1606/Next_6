"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
// import { signIn } from "next-auth/react";

export const Header = () => {
  const { data } = useSession();

  return (
    <div className="p-[30px] bg-blue-400 flex gap-[20px] items-center justify-center">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      {data ? (
        <Link href={"/profile"}>Profile</Link>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </div>
  );
};
