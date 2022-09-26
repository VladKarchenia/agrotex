import React from "react";
import {
  AspectRatio,
  Redacted,
  Picture,
  IPictureDimensions,
  useImageLoad,
} from "@/shared/components";
import { ResponsiveProp } from "@/utils";
import { mediaQueries } from "@/config";

const sliderImageDimensions: IPictureDimensions[] = [
  {
    mediaQuery: mediaQueries.xl,
    width: 550,
    ratio: "16:9",
  },
  {
    mediaQuery: mediaQueries.lg,
    width: 375,
    ratio: "16:9",
  },
  {
    mediaQuery: mediaQueries.md,
    width: 600,
    ratio: "16:9",
  },
  {
    mediaQuery: mediaQueries.sm,
    width: 600,
    ratio: "21:9",
  },
  {
    mediaQuery: "",
    width: 375,
    ratio: "21:9",
  },
];

const defaultAspectRatio: string | ResponsiveProp<string> = {
  "@initial": "21:9",
  "@md": "16:9",
};

const basicImageRatio: string = "16:9";

const basicImageSize: number = 800;

export interface ISliderImageProps {
  src: string;
  alt: string;
  imageDimensions?: IPictureDimensions[];
  imageAspectRatio?: string | ResponsiveProp<string>;
  defaultImageRatio?: string;
  defaultImageSize?: number;
}

export const SlideImage = ({
  src,
  alt,
  imageDimensions = sliderImageDimensions,
  imageAspectRatio = defaultAspectRatio,
  defaultImageRatio = basicImageRatio,
  defaultImageSize = basicImageSize,
}: ISliderImageProps) => {
  const { isLoaded, onLoad } = useImageLoad();
  const hasImage = src !== null;

  return (
    <AspectRatio ratio={imageAspectRatio}>
      <Redacted height="100%" width="100%" animated={hasImage && !isLoaded}>
        {hasImage ? (
          <Picture
            defaultImageSize={defaultImageSize}
            defaultImageRatio={defaultImageRatio}
            dimensions={imageDimensions}
            alt={alt}
            src={src}
            lazyload
            onLoad={onLoad}
          />
        ) : null}
      </Redacted>
    </AspectRatio>
  );
};
