import React from "react";
import { ComponentProps } from "@/utils";
import { IconLogo } from "@/shared/icons";
import { SLogo } from "./Logo.styles";

interface ILogo extends ComponentProps<typeof SLogo> {
  href?: string;
}

export const Logo: React.FC<ILogo> = ({ color, href = "/" }) => {
  return (
    <a
      aria-haspopup="false"
      aria-label="Logo name"
      role="button"
      tabIndex={0}
      href={href}
      data-track-id="header-nav__logo"
    >
      <SLogo color={color}>
        <IconLogo />
      </SLogo>
    </a>
  );
};
