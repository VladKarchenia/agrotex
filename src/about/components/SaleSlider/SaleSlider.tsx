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
  SSaleSlider,
  SSaleSliderArrow,
  SSaleSliderSlide,
} from "./SaleSlider.styles";

export type SaleSliderData = {
  title?: string;
  preTitle?: string;
  copy?: string;
  image?: React.ReactNode;
  buttonProps?: IButtonProps;
};

export interface ISaleSliderProps extends ComponentProps<typeof SSaleSlider> {
  data: SaleSliderData;

  isLoading?: boolean;
  loadingComponent?: React.ReactNode;
}

interface ISaleSliderContentProps {
  data: SaleSliderData;
}

export const SaleSliderContent: React.FC<ISaleSliderContentProps> = ({
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

export const SaleSlider = ({
  children,
  data,
  isLoading,
  loadingComponent = <ListingCardPlaceholder />,
}: ISaleSliderProps) => {
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
      <SSaleSlider data-plum-ui="product-rail">
        <GridContainer>
          <Grid
            columns={{ "@initial": 6, "@sm": 24 }}
            justify="center"
            css={{ position: "relative" }}
          >
            <Hidden below="sm">
              <SSaleSliderArrow direction="prev">
                <SliderNavigationArrow
                  direction="prev"
                  icon="long-arrow"
                  iconSize="lg"
                  dataTrackId="plum-product-rail-arrow-prev"
                />
              </SSaleSliderArrow>
            </Hidden>
            <GridItem column={{ "@initial": "1 / -1", "@sm": "2 / -2" }}>
              <Stack space={24}>
                <SaleSliderContent data={data} />

                <Slider noOverflow={{ "@initial": true, "@sm": false }}>
                  {isLoading
                    ? Array.from({ length: 6 }, (_, i) => i).map((index) => (
                        <Slide
                          key={index}
                          size={{ "@initial": 256, "@lg": 280 }}
                        >
                          <SSaleSliderSlide>
                            {loadingComponent}
                          </SSaleSliderSlide>
                        </Slide>
                      ))
                    : React.Children.map(
                        children,
                        (child, index) =>
                          React.isValidElement(child) && (
                            <Slide
                              key={index}
                              size={{ "@initial": 256, "@sm": "100%" }}
                            >
                              <SSaleSliderSlide>{child}</SSaleSliderSlide>
                            </Slide>
                          )
                      )}
                </Slider>
              </Stack>
            </GridItem>
            <Hidden below="sm">
              <SSaleSliderArrow direction="next">
                <SliderNavigationArrow
                  direction="next"
                  icon="long-arrow"
                  iconSize="lg"
                  dataTrackId="plum-product-rail-arrow-next"
                />
              </SSaleSliderArrow>
            </Hidden>
          </Grid>
        </GridContainer>
      </SSaleSlider>
    </SliderProvider>
  );
};
