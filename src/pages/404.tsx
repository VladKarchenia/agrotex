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

const NotFound = () => {
  return (
    <div style={style}>
      <Title as="h1" editorial>
        404 custom PAGE
      </Title>
      <Spacer size={32} />
      <Copy>Error Text</Copy>
    </div>
  );
};

export default NotFound;
