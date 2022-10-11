import { styled } from "@/config";

export const SBrands = styled("div", {
  overflow: "hidden",
});

export const SBrandsArrow = styled("div", {
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

export const SBrandsImageContainer = styled("div", {
  width: "$80",

  "img, svg": {
    display: "block",
    width: "100%",
    height: "auto",
  },
});

export const SBrandsSlide = styled("div", {
  height: "100%",
  paddingRight: "$16",
  paddingBottom: "$24",
  borderRight: "1px solid $neutrals-3",

  "@sm": {
    paddingRight: "$0",
    paddingBottom: "$0",
    borderRight: "none",
  },
});
