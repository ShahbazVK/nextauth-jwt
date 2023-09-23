"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const UseSessionContext = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default UseSessionContext;
