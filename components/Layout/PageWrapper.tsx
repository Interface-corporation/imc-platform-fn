import React from "react";
import Head from "next/head";

type PageWrapperProps = {
  title: string;
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} | IMC Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50">{children}</main>
    </>
  );
};

export default PageWrapper;
