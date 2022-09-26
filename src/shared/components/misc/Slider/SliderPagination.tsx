import * as React from "react";

import { ComponentProps } from "@/utils";

import { useSliderCoreContext, useSliderStateContext } from "./state";
import { useSliderPaginationBulletsState } from "./hooks";
import { getPaginationBulletsStyles } from "./utils";

import {
  SSliderPagination,
  SSliderPaginationTrack,
  SSliderPaginationBullet,
  SSliderPaginationBulletIcon,
} from "./SliderPagination.styles";

type LabelFn = (slide: number) => string;

interface ISliderPaginationBulletProps extends ComponentProps<typeof SSliderPaginationBullet> {
  index: number;

  labelFn?: LabelFn;

  dynamic?: boolean;

  isActive?: boolean;
  isPrev?: boolean;
  isNext?: boolean;

  /**
   * Disable tabbing on bullets when no bullet is being focused.
   *
   * Used to allow focus to jump to selected bullet, by disabling tabbing on other bullets
   */
  shouldDisableTabbing?: boolean;
}

const SliderPaginationBullet = React.forwardRef<HTMLButtonElement, ISliderPaginationBulletProps>(
  ({ labelFn, index, isActive, isPrev, isNext, shouldDisableTabbing, ...props }, ref) => {
    const slideNumber = index + 1;

    const label = labelFn ? labelFn(slideNumber) : `Go to slide ${slideNumber}`;

    return (
      <SSliderPaginationBullet
        ref={ref}
        type="button"
        role="tab"
        data-state={isActive ? "active" : isPrev ? "prev" : isNext ? "next" : ""}
        tabIndex={isActive ? 0 : shouldDisableTabbing ? -1 : 0}
        aria-selected={isActive}
        aria-label={label}
        title={label}
        {...props}
      >
        <SSliderPaginationBulletIcon />
      </SSliderPaginationBullet>
    );
  }
);

SliderPaginationBullet.displayName = "SliderPaginationBullet";

export interface ISliderPaginationProps extends ComponentProps<typeof SSliderPagination> {
  labelFn?: LabelFn;

  dynamic?: boolean;
}

export const SliderPagination: React.FC<ISliderPaginationProps> = ({
  dynamic,
  labelFn,
  ...props
}) => {
  const { slider } = useSliderCoreContext();
  const { currentSlide, scrollSnaps } = useSliderStateContext();

  const { focusedBullet, focusedBulletRef, setFocusedBullet } = useSliderPaginationBulletsState();

  const bulletsStyles = getPaginationBulletsStyles(currentSlide, dynamic, focusedBullet);

  return (
    <SSliderPagination {...props} dynamic={dynamic} style={{ width: bulletsStyles?.trackWidth }}>
      <SSliderPaginationTrack
        role="tablist"
        style={{
          transform: bulletsStyles?.trackPosition
            ? `translate3d(${bulletsStyles.trackPosition}px, 0,0)`
            : undefined,
        }}
      >
        {scrollSnaps.map((position, index, arr) => (
          <SliderPaginationBullet
            key={position}
            ref={index === focusedBullet ? focusedBulletRef : undefined}
            dynamic={dynamic}
            index={index}
            labelFn={labelFn}
            isActive={index === currentSlide}
            isPrev={position === arr[currentSlide - 1]}
            isNext={position === arr[currentSlide + 1]}
            shouldDisableTabbing={focusedBullet === null}
            onClick={() => slider?.scrollTo(index)}
            onFocus={() => setFocusedBullet(index)}
            onBlur={() => setFocusedBullet(null)}
          />
        ))}
      </SSliderPaginationTrack>
    </SSliderPagination>
  );
};
