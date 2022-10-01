import { styled } from "@/config";

export const SSaleSlider = styled("div", {
  overflow: "hidden",
});

export const SSaleSliderArrow = styled("div", {
  position: "absolute",
  top: 0,
  bottom: 0,
  backgroundColor: "var(--colors-neutrals-0)",
  zIndex: 1,
  // This is equal to 1 column from our 24 grid system
  width: `calc(100% / 24 * 1 + $32)`,

  "& > *": {
    height: "100%",
    width: "100%",
  },

  variants: {
    direction: {
      prev: { left: "-$32" },
      next: { right: "-$32" },
    },
  },
});

export const SSaleSliderImageContainer = styled("div", {
  width: "$80",

  "img, svg": {
    display: "block",
    width: "100%",
    height: "auto",
  },
});

export const SSaleSliderSlide = styled("div", {
  height: "100%",
});
