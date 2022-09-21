import React from "react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { requiredNamespaces } from "@/config/i18n";
import { Copy, Spacer, Title } from "@/shared/components";

const style: React.CSSProperties = {
  position: "absolute",
  height: "500px",
  top: "150px",
  left: "0",
  right: "0",
  textAlign: "center",
  margin: "0 auto",
};

interface IErrorProps {
  statusCode: any;
  message: any;
  stack: any;
}

const Error = ({ statusCode, message, stack }: IErrorProps) => {
  const { pathname } = useRouter();

  //not using useEffect will execute redirect faster
  if (typeof window !== "undefined") {
    //Redirect to 404 page
    if (process.env.NODE_ENV === "production") {
      //allow error tracking to finish before redirect
      setTimeout(() => {
        window.location.replace(
          `/error/error404?path=${encodeURIComponent(pathname)}`
        );
      }, 500);
    }
  }

  if (process.env.NODE_ENV === "development") {
    return (
      <div className="page-error" style={style}>
        <Title as="h1" editorial>
          There&#39;s nothing here
        </Title>
        <Spacer size={32} />
        <Copy>{statusCode} Error</Copy>
      </div>
    );
  }

  return <></>;
};

Error.getInitialProps = async ({ query, res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const listingslug = query.listingslug;

  return {
    message: err && err.message,
    stack: err && err.stack,
    statusCode,
    listingslug,
    namespacesRequired: requiredNamespaces,
  };
};

export default Error;
