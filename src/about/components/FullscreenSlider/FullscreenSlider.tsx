import React from "react";
import { mediaQueries } from "@/config";
import {
  Box,
  IPictureDimensions,
  Slider,
  SliderNavigation,
  SliderPagination,
  SliderProvider,
} from "@/shared/components";
import { useWindowDimensions } from "@/shared/hooks";
import {
  SPlaceholderContainer,
  SSliderContainer,
  SSliderNavigationContainer,
  SSliderPaginationContainer,
} from "./FullscreenSlider.styles";
import { IconDots } from "@/shared/icons";
import { FullscreenSliderContainer } from "./FullscreenSliderContainer";
import { FullscreenSlideImage } from "./FullscreenSlideImage";

const navigationProps = {
  labels: {
    prev: "prev",
    next: "next",
  },
};

const imageDimensions: IPictureDimensions[] = [
  {
    mediaQuery: mediaQueries.xl,
    width: 1920,
    ratio: "24:9",
  },
  {
    mediaQuery: mediaQueries.lg,
    width: 1440,
    ratio: "21:9",
  },
  {
    mediaQuery: mediaQueries.md,
    width: 1280,
    ratio: "16:9",
  },
  {
    mediaQuery: mediaQueries.sm,
    width: 992,
    ratio: "16:9",
  },
  {
    mediaQuery: mediaQueries.xs,
    width: 768,
    ratio: "5:4",
  },
  {
    mediaQuery: "",
    width: 414,
    ratio: "5:4",
  },
];

const images = [
  {
    src: "https://plumguide-staging.freetls.fastly.net/listings/9853/hero/cceb597f-fc13-47ad-82be-81775f64b495.jpg",
    alt: "Ikebana - 1",
  },
  {
    src: "https://plumguide-staging.freetls.fastly.net/listings/9853/hero/39c5be15-2298-49e9-88d9-a17ab5465fe2.jpg",
    alt: "Ikebana - 2",
  },
  {
    src: "https://plumguide-staging.freetls.fastly.net/listings/9853/hero/28df86c3-fbc2-4c8a-9536-26f9fc9e9445.jpg",
    alt: "Ikebana - 3",
  },
  {
    src: "https://plumguide-staging.freetls.fastly.net/listings/9853/hero/3ab1e698-1ad9-4c1b-a69c-f29d8b372782.jpg",
    alt: "Ikebana - 4",
  },
  {
    src: "https://plumguide-staging.freetls.fastly.net/listings/9853/hero/1484cd75-2a69-4339-bc63-ffb4995edfe6.jpg",
    alt: "Ikebana - 5",
  },
];

export const FullscreenSlider = () => {
  const dimensions = useWindowDimensions();

  return (
    <Box css={{ width: "100%", height: "100%", position: "relative" }}>
      <SliderProvider
        lazyInit
        options={{
          align: "start",
          containScroll: "trimSnaps",
          slidesPerView: 1,
          slidesToScroll: 1,
          loop: true,
          speed: 100,
        }}
        autoFocus
        // autoPlay
      >
        <SSliderContainer>
          <SPlaceholderContainer>
            <IconDots />
          </SPlaceholderContainer>
          <FullscreenSliderContainer>
            <Slider
              css={{
                position: "absolute",
                top: "$0",
                left: "$0",
                right: "$0",
                bottom: "$0",
                touchAction: "auto",

                "& > div": {
                  height: "100%",
                },
              }}
            >
              {images?.map((image, index) => (
                <FullscreenSlideImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt || ""}
                  imageDimensions={imageDimensions}
                  dimensions={dimensions}
                  defaultImageSize={800}
                  images={images}
                  index={index}
                  lazyPreloadN={2}
                  lazyBlur={false}
                />
              ))}
            </Slider>
          </FullscreenSliderContainer>
        </SSliderContainer>
        <SSliderNavigationContainer>
          <SliderNavigation
            {...navigationProps}
            variant="rounded"
            icon="chevron"
            iconSize="lg"
            css={{
              width: "100%",
              "@md": {
                display: "flex",
                justifyContent: "space-between",
              },
            }}
          />
        </SSliderNavigationContainer>
        <SSliderPaginationContainer>
          <SliderPagination dynamic={false} />
        </SSliderPaginationContainer>
      </SliderProvider>
    </Box>
  );
};

// const SlideContentContainer = ({ children }: { children: React.ReactNode }) => (
//   <Box>{children}</Box>
// );
