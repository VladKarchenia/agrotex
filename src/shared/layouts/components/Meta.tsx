import React from "react";
import Head from "next/head";

export interface IMeta {
  title: string;
  description: string;
  url: string;
}

export const Meta: React.FC<IMeta> = ({ title, description, url }) => (
  <Head>
    <title>{title}</title>
    <meta content={description} name="description" />
    <meta content={title} property="og:title" />
    <meta content={url} property="og:url" />
    <meta content={description} property="og:description" />

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta httpEquiv="cleartype" content="on" />
    <meta name="theme-color" content="#ffbb30" />
    <meta name="format-detection" content="telephone=no" />

    {/* If all pages are behind auth so don't index
    and we can separate different pages with it's own <Meta> */}
    {/* <meta name="robots" content="noindex" /> */}
    <link rel="canonical" href={url} />
  </Head>
);
