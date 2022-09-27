import React from "react";

import { ComponentProps } from "@/utils/types";

import {
  Copy,
  GridContainer,
  Hidden,
  IButtonProps,
  Slide,
  Slider,
  SliderNavigationArrow,
  SliderProvider,
  Stack,
  Title,
  ListingCardPlaceholder,
  Grid,
  GridItem,
} from "@/shared/components";

import {
  SProductRail,
  SProductRailArrow,
  SProductRailSlide,
} from "./ProductRail.styles";

export type ProductRailData = {
  title?: string;
  preTitle?: string;
  copy?: string;
  image?: React.ReactNode;
  buttonProps?: IButtonProps;
};

export interface IProductRailProps extends ComponentProps<typeof SProductRail> {
  data: ProductRailData;

  isLoading?: boolean;
  loadingComponent?: React.ReactNode;
}

interface IProductRailContentProps {
  data: ProductRailData;
}

export const ProductRailContent: React.FC<IProductRailContentProps> = ({
  data,
}) => {
  const { preTitle } = data;

  return (
    <Stack space={8}>
      {preTitle && <Copy intent="detail">{preTitle}</Copy>}
      <Title as="h2" scale={preTitle ? 5 : 4} editorial>
        {data.title}
      </Title>
    </Stack>
  );
};

export const ProductRail = ({
  children,
  data,
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
              <Stack space={24}>
                <ProductRailContent data={data} />

                <Slider noOverflow={{ "@initial": true, "@sm": false }}>
                  {isLoading
                    ? Array.from({ length: 6 }, (_, i) => i).map((index) => (
                        <Slide
                          key={index}
                          size={{ "@initial": 256, "@lg": 280 }}
                        >
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
              </Stack>
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
