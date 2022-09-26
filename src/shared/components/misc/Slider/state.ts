import React from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

import { ResponsiveProp } from "@/utils";

export type SliderOptions = EmblaOptionsType & {
  slidesPerView?: number;
  spacing?: number;
  responsive?: Omit<ResponsiveProp<SliderOptions>, "@initial">;
};

/* SLIDER - Core Context */
export interface ISliderCoreContext {
  slider: EmblaCarouselType | undefined;
  sliderRef: React.Ref<HTMLDivElement>;
}

export const SliderCoreContext = React.createContext<ISliderCoreContext>(
  {} as ISliderCoreContext
);

export const useSliderCoreContext = () => React.useContext(SliderCoreContext);

/* SLIDER - State Context */
export interface ISliderStateContext {
  currentSlide: number;
  options: SliderOptions;
  scrollSnaps: number[];
  isMounted: boolean;
  isIdle: boolean;
  lazyInit: boolean;
}

export const SliderStateContext = React.createContext<ISliderStateContext>(
  {} as ISliderStateContext
);

export const useSliderStateContext = () => React.useContext(SliderStateContext);
