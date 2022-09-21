import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { getCommonLayout } from "@/shared/layouts/common";

import "@/styles/fonts.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const pageLayout = (Component as any).layout || getCommonLayout;

  return pageLayout(<Component {...pageProps} key={router.route} />);
}

export default appWithTranslation(MyApp);

// start = NODE_ENV=production node server.js