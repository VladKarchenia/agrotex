import * as React from "react";
import { useInView } from "react-intersection-observer";

import { CSS } from "@/config";

import { mergeCSSObjects, mergeRefs, ComponentProps } from "@/utils";

import {
  SliderOptions,
  useSliderCoreContext,
  useSliderStateContext,
} from "./state";
import { generateResponsiveStyles } from "./utils";

import {
  liveRegionClassName,
  SSlider,
  SSliderContainer,
} from "./Slider.styles";

export interface ISliderProps extends ComponentProps<typeof SSlider> {
  containerCss?: CSS;
}

const getSliderStyles = (options: SliderOptions) => {
  return generateResponsiveStyles({ options }, (currentOptions) => {
    return {
      before: {
        content: `'${JSON.stringify(currentOptions)}'`,
      },
    };
  });
};

const getSliderContainerStyles = (options: SliderOptions) => {
  return generateResponsiveStyles({ options }, (currentOptions) => {
    // TODO: fix type any
    const styles = {} as any;

    if (currentOptions.spacing) {
      styles["marginLeft"] = `-$${currentOptions.spacing}`;
    }

    return styles;
  });
};

export const Slider = React.forwardRef<HTMLDivElement, ISliderProps>(
  ({ children, css = {}, containerCss = {}, ...props }, ref) => {
    const { slider, sliderRef } = useSliderCoreContext();
    const { options, lazyInit } = useSliderStateContext();

    const [inViewRef, inView] = useInView({
      rootMargin: "80px",
      triggerOnce: true,
    });

    const slidesCount = React.useMemo(
      () => React.Children.count(children),
      [children]
    );
    const slidesCountRef = React.useRef(slidesCount);

    const sliderStyles = getSliderStyles(options);

    const sliderContainerStyles = getSliderContainerStyles(options);

    React.useEffect(() => {
      if (slidesCount !== slidesCountRef.current) {
        slider?.reInit();
      }
    }, [slidesCount, slidesCountRef, slider]);

    return (
      <>
        <div
          className={liveRegionClassName()}
          aria-atomic="true"
          aria-live="polite"
          data-plum-ui="slider-live-region"
        />
        <SSlider
          ref={mergeRefs([
            ref,
            inViewRef,
            !lazyInit ? sliderRef : inView ? sliderRef : null,
          ])}
          role="region"
          aria-label="gallery"
          data-plum-ui="slider"
          css={mergeCSSObjects(css, sliderStyles)}
          {...props}
        >
          <SSliderContainer
            css={mergeCSSObjects(containerCss, sliderContainerStyles)}
          >
            {React.Children.map(
              children,
              (child, index) =>
                React.isValidElement(child) &&
                React.cloneElement(child, {
                  ...child.props,
                  role: "tabpanel",
                  "aria-hidden": slider?.slidesNotInView().includes(index),
                })
            )}
          </SSliderContainer>
        </SSlider>
      </>
    );
  }
);

Slider.displayName = "Slider";
