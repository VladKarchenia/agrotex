import React from "react";
import { useTranslation } from "react-i18next";
import { IconBurgerMenu } from "@/shared/icons";

import { SAccountButton } from "./AccountButton.styles";

export interface IAccountButton {
  onClick: () => void;
  theme?: "default" | "cream" | "transparent";
}

export const AccountButton = ({
  onClick,
  theme = "default",
}: IAccountButton) => {
  const { t } = useTranslation();

  const label = t("common:nav.loginDrawer.login");

  return (
    <SAccountButton aria-label={label} onClick={onClick} theme={theme} rounded>
      <IconBurgerMenu />
    </SAccountButton>
  );
};
