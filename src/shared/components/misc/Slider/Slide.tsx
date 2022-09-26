import * as React from "react";

import { mergeCSSObjects, ComponentProps, ResponsiveProp } from "@/utils";

import { generateResponsiveStyles } from "./utils";
import { SliderOptions, useSliderStateContext } from "./state";

import { SSlide } from "./Slide.styles";

export type SlideSize = (string | number) | ResponsiveProp<string | number>;

export interface ISlideProps extends ComponentProps<typeof SSlide> {
  size?: SlideSize;
}

const getSlideStyles = (options: SliderOptions, size?: SlideSize) => {
  return generateResponsiveStyles(
    { options, size },
    (currentOptions, currentSize) => {
      // TODO: fix type
      const styles = {} as any;

      if (typeof currentOptions.spacing !== "undefined") {
        styles["paddingLeft"] = `$${currentOptions.spacing}`;
      }

      // Size defined by slider options
      if (typeof currentOptions.slidesPerView !== "undefined") {
        styles["flexBasis"] = `${(100 / currentOptions.slidesPerView).toFixed(
          2
        )}%`;
        styles["maxWidth"] = `${(100 / currentOptions.slidesPerView).toFixed(
          2
        )}%`;
      }

      // Size overwritten by the prop
      if (typeof currentSize !== "undefined") {
        styles["flexBasis"] = currentSize;
        styles["maxWidth"] = currentSize;
      }

      return styles;
    }
  );
};

export const Slide = ({ css = {}, size, ...props }: ISlideProps) => {
  const { options } = useSliderStateContext();

  const slideStyles = getSlideStyles(options, size);

  return <SSlide css={mergeCSSObjects(css, slideStyles)} {...props} />;
};
