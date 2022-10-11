import { useRouter } from "next/router";
import React from "react";
// import { GetStaticPaths, GetStaticProps } from "next";
// import Head from "next/head";
import { useTranslation } from "react-i18next";
// import urljoin from "url-join";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import {
//   atomicClassNames,
//   Box,
//   Grid,
//   GridContainer,
//   GridItem,
//   Hidden,
//   Spacer,
//   Title,
// } from "@plum/plum-ui-next";

// import { config, routeConfig } from "@/config";
// import { requiredNamespaces } from "@/config/i18n";

// import { FooterContainer } from "@plum/plum-nav";
// import { IMeta, Meta, Scripts } from "@/layouts/components";
// import {
//   AuthGuard,
//   BackLink,
//   DashboardBox,
//   Header,
//   HostNav,
//   NavBar,
// } from "@/shared/components";
// import { AmenitiesForm, HomesSidebar, ListingHeader } from "@/homes/components";
// import { AmenitiesLayout } from "@/homes/layouts";

const ProductIndex = () => {
  const { t } = useTranslation();
  const { query } = useRouter();
  const productId = query.productId as string;

  //   const metaData: IMeta = {
  //     title: "Amenities",
  //     description: "Update your listing’s amenities",
  //     url: urljoin(config.APP_FULL_URI, "host", "dashboard", homeId, "amenities"),
  //   };

  return (
    <>
      <div>{productId} Page</div>
      {/* <Head>
        <title>{metaData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scripts />
      <Meta {...metaData} /> */}

      {/* <Box
        className={atomicClassNames({ display: "flex" })}
        css={{ flexDirection: "column", minHeight: "100vh" }}
      >
        <Header>
          <Hidden below="md">
            <HostNav />
          </Hidden>
        </Header>

        <Spacer size={{ "@initial": 0, "@md": 32 }} />

        <GridContainer fullBleed={{ "@initial": true, "@md": false }} css={{ maxWidth: "1400px" }}>
          <AuthGuard allowedRoles={["Admin", "Host", "Curator"]}>
            <Grid
              columns={{ "@md": "320px 1fr" }}
              gap={{ "@initial": 8, "@md": 16 }}
              columnGap={32}
            >
              <GridItem column="1 / -1">
                <Hidden above="md">
                  <NavBar
                    backLink={routeConfig.MODIFY_LISTING_URL(homeId)}
                    title={t("dashboard:homes.pages.amenities")}
                    css={{ paddingX: "$16" }}
                  />
                </Hidden>

                <Hidden below="md">
                  <BackLink href={routeConfig.MODIFY_LISTING_URL(homeId)}>
                    {t("dashboard:homes.pages.modifyListing")}
                  </BackLink>
                </Hidden>

                <Hidden above="md">
                  <Spacer size={16} />
                  <ListingHeader />
                </Hidden>
              </GridItem>

              <GridItem>
                <Hidden below="md">
                  <HomesSidebar />
                </Hidden>
              </GridItem>

              <GridItem>
                <DashboardBox fullHeight>
                  <Hidden below="md">
                    <Title as="h2">{t("dashboard:homes.pages.amenities")}</Title>
                  </Hidden>

                  <AmenitiesForm />
                </DashboardBox>
              </GridItem>
            </Grid>
          </AuthGuard>
        </GridContainer>

        <Box css={{ marginTop: "auto" }}>
          <FooterContainer showUserSettings={false} />
        </Box>
      </Box> */}
    </>
  );
};

// AmenitiesIndex.layout = (page) => <AmenitiesLayout>{page}</AmenitiesLayout>;

// export const getStaticProps: GetStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, requiredNamespaces)),
//   },
// });

// export const getStaticPaths: GetStaticPaths = () => ({
//   fallback: "blocking",
//   paths: [],
// });

export default ProductIndex;
