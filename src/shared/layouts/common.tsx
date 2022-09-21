import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../gql/client";
import { Global } from "../components";

export const CommonLayout: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  return (
    <ApolloProvider client={client}>
      <Global backgroundColor="neutrals-1">{children}</Global>
    </ApolloProvider>
  );
};

export const getCommonLayout = (page: any) => (
  <CommonLayout>{page}</CommonLayout>
);
