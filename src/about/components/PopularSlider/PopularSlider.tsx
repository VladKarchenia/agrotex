import React, { useCallback, useState } from "react";
import { useTranslation } from "next-i18next";

import {
  Box,
  Spacer,
  ProductRail,
  ListingCard,
  Stack,
  Copy,
  Title,
  GridContainer,
  GridItem,
  Grid,
  Tabs,
  TabList,
  TabListItem,
  TabPanels,
  TabPanel,
} from "@/shared/components";

import popularItems from "./popularItems.json";

export enum TripsStatus {
  Upcoming = "Upcoming",
  Past = "Past",
  CancelledDeclined = "CancelledDeclined",
}

export const PopularSlider = () => {
  const { t } = useTranslation();
  // const params = useTripsUrlStateContext();
  const [id, setId] = useState(TripsStatus.Upcoming);

  const handleChange = useCallback(
    (value: TripsStatus) => {
      // if (
      //   (value === TripsStatus.Upcoming && router.asPath === TRIPS_INDEX_URL) ||
      //   value === query.status
      // ) {
      //   return;
      // }

      // updateRoute({
      //   status: TripsStatus[value],
      //   offset: 0,
      // });
      return setId(value);
    },
    // [updateRoute, router.asPath, query.status]
    []
  );

  // if (!isReady) {
  //   return (
  //     <>
  //       <Spacer size={192} />
  //       {/* <LoadingPlaceholder /> */}
  //       Placeholder
  //       <Spacer size={192} />
  //     </>
  //   );
  // }

  return (
    <Box css={{ backgroundColor: "$neutrals-0" }}>
      <Spacer size={64} />
      <Box css={{ padding: "$24", backgroundColor: "$brand-blue-light" }}>
        Здесь надо ещё добавить табы с переключением на разные категории! Т.е
        будут подставляться разные данные в слайдер
      </Box>
      <Spacer size={24} />
      <GridContainer>
        <Grid
          columns={{ "@initial": 6, "@sm": 24 }}
          justify="center"
          css={{ position: "relative" }}
        >
          <GridItem column={{ "@initial": "1 / -1", "@sm": "2 / -2" }}>
            <Stack space={8}>
              <Copy intent="detail">{t("app:popular.preTitle")}</Copy>
              <Title as="h2" scale={5} editorial>
                {t("app:popular.title")}
              </Title>
            </Stack>

            <Spacer size={24} />
          </GridItem>
        </Grid>
      </GridContainer>

      <Tabs
        // selectedTab={params.status}
        selectedTab={id}
        onChange={handleChange}
        animate={false}
      >
        <GridContainer fullBleed={{ "@initial": true, "@sm": false }}>
          <Grid
            columns={{ "@initial": 6, "@sm": 24 }}
            justify="center"
            css={{ position: "relative" }}
          >
            <GridItem column={{ "@initial": "1 / -1", "@sm": "2 / -2" }}>
              <TabList
                label="trips"
                css={{
                  marginBottom: "$24",
                  paddingX: "$24",

                  "@md": {
                    marginBottom: "$40",
                    paddingX: "$0",
                  },
                }}
              >
                <TabListItem id={TripsStatus.Upcoming}>
                  Животноводство
                </TabListItem>
                <TabListItem id={TripsStatus.Past}>
                  Электроинструмент
                </TabListItem>
                <TabListItem id={TripsStatus.CancelledDeclined}>
                  Водоснабжение
                </TabListItem>
              </TabList>
            </GridItem>
          </Grid>
        </GridContainer>
        <Box css={{ overflow: "hidden" }}>
          <TabPanels>
            <TabPanel id={TripsStatus.Upcoming}>
              <ProductRail
              // isLoading={state.loading}
              >
                {popularItems.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    name={listing.name}
                    cityName={listing.cityName}
                    image={listing.image}
                    // url={listing.url}
                    // openInSameTab={false}
                    // onClick={() => {
                    //   listingCardOnClick(listing.Id);
                    // }}
                  />
                ))}
              </ProductRail>
            </TabPanel>
            <TabPanel id={TripsStatus.Past}>
              <ProductRail
              // isLoading={state.loading}
              >
                {popularItems.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    name={listing.name}
                    cityName={listing.cityName}
                    image={listing.image}
                    // url={listing.url}
                    // openInSameTab={false}
                    // onClick={() => {
                    //   listingCardOnClick(listing.Id);
                    // }}
                  />
                ))}
              </ProductRail>
            </TabPanel>
            <TabPanel id={TripsStatus.CancelledDeclined}>
              <ProductRail
              // isLoading={state.loading}
              >
                {popularItems.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    name={listing.name}
                    cityName={listing.cityName}
                    image={listing.image}
                    // url={listing.url}
                    // openInSameTab={false}
                    // onClick={() => {
                    //   listingCardOnClick(listing.Id);
                    // }}
                  />
                ))}
              </ProductRail>
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>

      <Spacer size={32} />
    </Box>
  );
};
