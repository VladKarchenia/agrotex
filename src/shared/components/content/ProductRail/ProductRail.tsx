import React from "react";

import { ComponentProps } from "@/utils/types";

import {
  Copy,
  GridContainer,
  Hidden,
  Slide,
  Slider,
  SliderNavigationArrow,
  SliderProvider,
  ListingCardPlaceholder,
  Grid,
  GridItem,
} from "@/shared/components";

import {
  SProductRail,
  SProductRailArrow,
  SProductRailSlide,
} from "./ProductRail.styles";

export interface IProductRailProps extends ComponentProps<typeof SProductRail> {
  isLoading?: boolean;
  loadingComponent?: React.ReactNode;
}

export const ProductRail = ({
  children,
  isLoading,
  loadingComponent = <ListingCardPlaceholder />,
}: IProductRailProps) => {
  return (
    <SliderProvider
      lazyInit
      options={{
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: 1,
        spacing: 16,
        dragFree: true,

        responsive: {
          "@sm": { slidesToScroll: 2 },
          "@md": { slidesToScroll: 3 },
          "@lg": { slidesToScroll: 4 },
        },
      }}
    >
      <SProductRail data-plum-ui="product-rail">
        <GridContainer>
          <Grid
            columns={{ "@initial": 6, "@sm": 24 }}
            justify="center"
            css={{ position: "relative" }}
          >
            <Hidden below="sm">
              <SProductRailArrow direction="prev">
                <SliderNavigationArrow
                  direction="prev"
                  icon="long-arrow"
                  iconSize="lg"
                  dataTrackId="plum-product-rail-arrow-prev"
                />
              </SProductRailArrow>
            </Hidden>
            <GridItem column={{ "@initial": "1 / -1", "@sm": "2 / -2" }}>
              <Slider noOverflow={{ "@initial": true, "@sm": false }}>
                {isLoading
                  ? Array.from({ length: 6 }, (_, i) => i).map((index) => (
                      <Slide key={index} size={{ "@initial": 256, "@lg": 280 }}>
                        <SProductRailSlide>
                          {loadingComponent}
                        </SProductRailSlide>
                      </Slide>
                    ))
                  : React.Children.map(
                      children,
                      (child, index) =>
                        React.isValidElement(child) && (
                          <Slide
                            key={index}
                            size={{ "@initial": 256, "@lg": 280 }}
                          >
                            <SProductRailSlide>{child}</SProductRailSlide>
                          </Slide>
                        )
                    )}
              </Slider>
            </GridItem>
            <Hidden below="sm">
              <SProductRailArrow direction="next">
                <SliderNavigationArrow
                  direction="next"
                  icon="long-arrow"
                  iconSize="lg"
                  dataTrackId="plum-product-rail-arrow-next"
                />
              </SProductRailArrow>
            </Hidden>
          </Grid>
        </GridContainer>
      </SProductRail>
    </SliderProvider>
  );
};
