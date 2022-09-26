import React from "react";
import {
  Box,
  HeaderNavItem,
  HeaderNavWrapper,
  Logo,
  Spacer,
} from "@/shared/components";

interface IHeaderProps {
  children?: React.ReactNode;
  hasShadow?: boolean;
  theme?: "default" | "cream" | "transparent";
}

export const Header: React.FC<IHeaderProps> = ({
  children = null,
  hasShadow = false,
  theme = "default",
}) => {
  return (
    <HeaderNavWrapper
      theme={theme}
      hasShadow={{ "@initial": false, "@md": hasShadow }}
      css={{ paddingX: "$16" }}
    >
      <HeaderNavItem justify="start">
        <Logo />
      </HeaderNavItem>
      <HeaderNavItem>{children}</HeaderNavItem>
      <HeaderNavItem justify="end">
        <Box>Поиск</Box>
      </HeaderNavItem>
    </HeaderNavWrapper>
  );
};
