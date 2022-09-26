import { getStyleFromResponsiveProp } from "@/utils";

import { SlideSize } from "./Slide";
import { SliderOptions } from "./state";

export const SLIDER_MOVE_EVENT = "slider-move";

export const defaultBulletWidth = 16;

/**
 * Returns styles for the pagination bullets when dynamic bullets are enabled
 */
export const getPaginationBulletsStyles = (
  currentSlide: number,
  dynamicBullets?: boolean,
  focusedBullet?: number | null,
  bulletWidth = defaultBulletWidth
): { trackWidth: number; trackPosition: number } | null => {
  if (!dynamicBullets) {
    return null;
  }

  const trackWidth = bulletWidth * 5;

  const generatePaginationBulletsTrackPosition = () => {
    const initialPosition = trackWidth / 2 - bulletWidth / 2;

    if (focusedBullet === 0 || (focusedBullet === null && currentSlide === 0)) {
      return initialPosition;
    }

    return initialPosition - bulletWidth * (focusedBullet || currentSlide);
  };

  const trackPosition = generatePaginationBulletsTrackPosition();

  return {
    trackWidth,
    trackPosition,
  };
};

type SliderResponsiveStyles = {
  options?: SliderOptions;
  size?: SlideSize;
};

/**
 * This will generate responsive styles for the slider components based on the options and (slide) size provided.
 */
export const generateResponsiveStyles = (
  args: SliderResponsiveStyles,
  callbackFn: (opts: SliderOptions, size?: SlideSize) => {}
) => {
  const responsiveOptions = {
    "@initial": args.options,
    ...(args.options?.responsive || {}),
  };

  return getStyleFromResponsiveProp(responsiveOptions, (value, key) =>
    callbackFn(value, typeof args?.size === "object" ? args?.size?.[key] : args?.size)
  );
};
