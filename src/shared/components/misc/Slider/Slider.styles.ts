import { css, styled } from "@/config";

export const liveRegionClassName = css({
  srOnly: true,
});

export const SSlider = styled("div", {
  width: "100%",

  before: {
    display: "none",
  },

  "&.is-draggable": {
    cursor: "grab",
  },

  "&.is-dragging": {
    cursor: "grabbing",
  },

  focus: {
    outline: "none",
  },

  keyboardFocus: {
    outline: "1px solid $system-black",
  },

  variants: {
    noOverflow: {
      false: {
        overflow: "hidden",
      },
      true: {
        overflow: "visible",
      },
    },
  },

  defaultVariants: {
    noOverflow: "false",
  },
});

export const SSliderContainer = styled("div", {
  display: "flex",
  userSelect: "none",
  WebkitTouchCallout: "none",
  WebkitTapHighlightColor: "transparent",
});
