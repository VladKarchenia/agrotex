import React, { useEffect } from "react";

import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { SliderCoreContext, SliderOptions, SliderStateContext } from "./state";
import { setupA11y } from "./a11y";

const initialOptions: EmblaOptionsType = {
  align: "start",
};

export interface ISliderProviderProps {
  children: React.ReactNode;
  idleTimeoutMs?: number;

  lazyInit?: boolean;
  autoFocus?: boolean;
  autoPlay?: boolean;

  options?: SliderOptions;

  on?: {
    [key in EmblaEventType]?: (slider: EmblaCarouselType) => void;
  };
}

export const SliderProvider: React.FC<ISliderProviderProps> = ({
  children,
  idleTimeoutMs,
  lazyInit = false,
  autoFocus = false,
  autoPlay = false,
  options = {},
  on = {},
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [isMounted, setIsMounted] = React.useState(false);
  const [isIdle, setIsIdle] = React.useState(false);

  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const idleTimeoutRef = React.useRef<number>();

  /**
   * This function gets ran after a transition has ended ("transitionEnd") on the slider
   *
   * This event gets called when the slider has finished animating, either it being a slide, fade, etc...
   */
  const resetIdleTimeout = React.useCallback(() => {
    // Setting the slider as non idle since there was a recent transition happening
    setIsIdle(false);

    // clears the timeout below
    clearTimeout(idleTimeoutRef.current);

    // After the timeout has finished running the slider will become idle
    idleTimeoutRef.current = window.setTimeout(() => {
      setIsIdle(true);
    }, idleTimeoutMs);
  }, [idleTimeoutMs, idleTimeoutRef]);

  const [sliderRef, slider] = useEmblaCarousel(
    {
      ...initialOptions,
      ...options,
    },
    [Autoplay({ playOnInit: autoPlay })]
  );

  useEffect(() => {
    if (!slider) return;

    const handleInit = () => {
      setIsMounted(true);

      on?.init?.(slider);
    };

    const handleReInit = () => {
      setScrollSnaps(slider.scrollSnapList());

      on?.reInit?.(slider);
    };

    const handleDestroy = () => {
      on?.destroy?.(slider);
    };

    const handleScroll = () => {
      setIsIdle(false);

      on?.scroll?.(slider);
    };

    const handleSelect = () => {
      setCurrentSlide(slider.selectedScrollSnap());

      on?.select?.(slider);
    };

    const handleSettle = () => {
      resetIdleTimeout();

      on?.settle?.(slider);
    };

    slider.on("init", handleInit);
    slider.on("reInit", handleReInit);
    slider.on("destroy", handleDestroy);
    slider.on("scroll", handleScroll);
    slider.on("select", handleSelect);
    slider.on("settle", handleSettle);

    return () => {
      slider.off("init", handleInit);
      slider.off("reInit", handleReInit);
      slider.off("destroy", handleDestroy);
      slider.off("scroll", handleScroll);
      slider.off("select", handleSelect);
      slider.off("settle", handleSettle);
    };
  }, [on, resetIdleTimeout, slider]);

  useEffect(() => {
    if (!slider) return;

    setScrollSnaps(slider.scrollSnapList());

    return setupA11y(slider, autoFocus);
  }, [slider, autoFocus]);

  useEffect(() => {
    if (typeof options?.startIndex !== "number") return;

    setCurrentSlide(options.startIndex);
  }, [options.startIndex]);

  return (
    <SliderCoreContext.Provider value={{ slider, sliderRef }}>
      <SliderStateContext.Provider
        value={{
          currentSlide,

          options: { ...initialOptions, ...options },

          scrollSnaps,

          isMounted,
          isIdle,

          lazyInit,
        }}
      >
        {children}
      </SliderStateContext.Provider>
    </SliderCoreContext.Provider>
  );
};
