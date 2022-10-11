import React from "react";
import Head from "next/head";
import Link from "next/link";
import { routeConfig } from "@/config";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const CategoryIndex = () => {
  const { t } = useTranslation();
  const { query } = useRouter();
  const categoryId = query.categoryId as string;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <Meta {...metaData} /> */}
      Категория - {categoryId}
      <Link href={routeConfig.ABOUT_URL} passHref>
        About
      </Link>
    </>
  );
};

export default CategoryIndex;