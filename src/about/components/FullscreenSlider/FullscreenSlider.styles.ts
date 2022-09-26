import { styled } from "@/config";
import { animations, easing } from "@/utils";

export const SSliderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  height: "100%",
  position: "relative",

  before: {
    content: "",
    display: "block",
    width: "100%",
    height: 0,
    paddingTop: `calc(100% / (5 / 4))`,

    "@sm": {
      paddingTop: `calc(100% / (16 / 9))`,
    },
    "@lg": {
      paddingTop: `calc(100% / (21 / 9))`,
    },
    "@xl": {
      paddingTop: `calc(100% / (24 / 9))`,
    },
  },
});

export const SPlaceholderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "$0",
  left: "$0",
  right: "$0",
  bottom: "$0",
  animation: `${animations.opacityPulse} ${easing.smooth({
    duration: 2500,
  })} infinite`,

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
});

export const SSliderNavigationContainer = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  alignItems: "center",
  display: "none",
  zIndex: "$1",
  "@md": {
    display: "flex",
    paddingX: "$24",
  },
});

export const SSliderPaginationContainer = styled("div", {
  position: "absolute",
  bottom: "$16",
  left: 0,
  width: "100%",
  justifyContent: "center",
  display: "flex",
  zIndex: "$1",
});
