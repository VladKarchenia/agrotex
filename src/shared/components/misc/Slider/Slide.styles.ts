import { styled } from "@/config";

export const SSlide = styled("div", {
  position: "relative",
  height: "inherit",

  flexGrow: 0,
  flexShrink: 0,

  variants: {
    center: {
      true: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
});
