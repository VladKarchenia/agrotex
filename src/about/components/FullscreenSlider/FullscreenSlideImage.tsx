import React from "react";
import {
  AspectRatio,
  Box,
  IPictureDimensions,
  ISlideProps,
  Picture,
  Redacted,
  Slide,
  useImageLoad,
} from "@/shared/components";

export interface IGalleryImage {
  src: string;
  alt?: string;
}

const shouldLazyPreload = (totalLength: number, i: number, n = 2) => {
  if (n === 0) return false;
  // preload the next n images
  // preload the previous n images
  return i <= n || i >= totalLength - n;
};

export const FullscreenSlideImage = ({
  ratio,
  size,
  src,
  alt,
  imageDimensions,
  dimensions,
  defaultImageSize,
  images,
  index,
  lazyPreloadN,
  lazyBlur,
}: {
  ratio?: string;
  size?: ISlideProps["size"];
  src: string;
  alt: string;
  imageDimensions: IPictureDimensions[];
  dimensions?: { height: number; width: number };
  defaultImageSize: number;
  images: IGalleryImage[];
  index: number;
  lazyPreloadN: number;
  lazyBlur: boolean;
}) => {
  const { isLoaded, onLoad } = useImageLoad();

  return (
    <Slide size={size}>
      {ratio ? (
        <AspectRatio ratio={ratio}>
          <Redacted animated={!isLoaded} height="100%" width="100%">
            <Picture
              src={src}
              alt={alt}
              defaultImageSize={defaultImageSize}
              defaultImageRatio={ratio}
              dimensions={imageDimensions}
              lazypreload={shouldLazyPreload(
                images.length,
                index,
                lazyPreloadN
              )}
              lazyblur={lazyBlur}
              lazyload
              onLoad={onLoad}
              lazyExpand={
                dimensions && dimensions.width ? `${dimensions.width * 2}` : ""
              }
            />
          </Redacted>
        </AspectRatio>
      ) : (
        <Box
          css={{
            height: "100%",
          }}
        >
          <Picture
            src={src}
            alt={alt}
            defaultImageSize={defaultImageSize}
            dimensions={imageDimensions}
            lazypreload={shouldLazyPreload(images?.length, index, lazyPreloadN)}
            lazyblur={lazyBlur}
            lazyload
            lazyExpand={
              dimensions && dimensions.width ? `${dimensions.width * 2}` : ""
            }
            pictureCss={{
              alignItems: "center",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            css={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              width: "auto",
            }}
          />
        </Box>
      )}
    </Slide>
  );
};
