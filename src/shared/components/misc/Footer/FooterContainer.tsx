import * as React from "react";

import { Footer } from "./Footer";

export interface IFooterContainerProps {}

export const FooterContainer: React.FC<IFooterContainerProps> = () => {
  return <Footer />;
};

FooterContainer.displayName = "FooterContainer";
