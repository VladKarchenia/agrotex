import React, { useCallback } from "react";

import { ComponentProps } from "@/utils";

import { ISpacerProps, Spacer } from "@/shared/components";
import { IconSize, IconArrow, IconChevron, IconLongArrow } from "@/shared/icons";

import { SLIDER_MOVE_EVENT } from "./utils";
import { useSliderCoreContext } from "./state";

import { SSliderNavigation, SSliderNavigationArrow } from "./SliderNavigation.styles";

type ArrowIcon = "arrow" | "chevron" | "long-arrow";

const getSliderArrowIcon = (icon?: ArrowIcon) => {
  switch (icon) {
    default:
    case "arrow":
      return IconArrow;

    case "chevron":
      return IconChevron;

    case "long-arrow":
      return IconLongArrow;
  }
};

export interface ISliderNavigationArrowProps
  extends ComponentProps<typeof SSliderNavigationArrow> {
  direction: "prev" | "next";

  icon?: ArrowIcon;
  iconSize?: IconSize;

  label?: string;

  dataTrackId?: string;
}

const defaultLabels = {
  prev: "Previous",
  next: "Next",
};

export const SliderNavigationArrow: React.FC<ISliderNavigationArrowProps> = ({
  direction,
  icon = "arrow",
  iconSize = "md",
  label,
  dataTrackId,
  ...props
}) => {
  const { slider } = useSliderCoreContext();

  const ArrowIcon = getSliderArrowIcon(icon);

  const onClick = useCallback(() => {
    const fn = direction === "prev" ? slider?.scrollPrev : slider?.scrollNext;

    if (fn) {
      fn();

      // Communicate with a11y extension to update slider live region whenever user interacts with navigation buttons
      document.dispatchEvent(new CustomEvent(SLIDER_MOVE_EVENT));
    }
  }, [direction, slider]);

  return (
    <SSliderNavigationArrow
      data-track-id={dataTrackId}
      {...props}
      type="button"
      aria-label={label || defaultLabels[direction]}
      title={label || defaultLabels[direction]}
      disabled={direction === "prev" ? !slider?.canScrollPrev() : !slider?.canScrollNext()}
      onClick={onClick}
    >
      <ArrowIcon direction={direction === "prev" ? "left" : "right"} size={iconSize} />
    </SSliderNavigationArrow>
  );
};

export interface ISliderNavigationProps extends ComponentProps<typeof SSliderNavigation> {
  labels?: {
    prev: string;
    next: string;
  };

  icon?: ArrowIcon;
  iconSize?: IconSize;

  spacing?: ISpacerProps["size"];

  variant?: ISliderNavigationArrowProps["variant"];
}

export const SliderNavigation: React.FC<ISliderNavigationProps> = ({
  icon,
  iconSize,
  labels,
  spacing = 8,
  variant,
  ...props
}) => {
  return (
    <SSliderNavigation {...props}>
      <SliderNavigationArrow
        direction="prev"
        label={labels?.prev}
        icon={icon}
        iconSize={iconSize}
        variant={variant}
      />
      <Spacer size={spacing} horizontal />
      <SliderNavigationArrow
        direction="next"
        label={labels?.next}
        icon={icon}
        iconSize={iconSize}
        variant={variant}
      />
    </SSliderNavigation>
  );
};
