import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>EATIZ</title>
      </Head>
      <Navbar />
      {children}
    </div>
  );
}
