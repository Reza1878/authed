/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import React from "react";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  const { title } = props;
  return (
    <Head>
      <title>{title} | Authed</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

export default Header;
