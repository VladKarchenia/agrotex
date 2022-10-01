import { styled } from "@/config";
import { rgba, easing, multipleSelectors } from "@/utils";

export const SStockMultiCard = styled("div", {
  height: "100%",
  minWidth: 150,
  display: "flex",
  flexDirection: "column",

  hover: {
    // disable blue hightlight on tap in chrome
    WebkitTapHighlightColor: "transparent",
  },
});

export const SStockMultiCardImageContainer = styled("div", {
  height: 0,
  overflow: "hidden",
  paddingTop: "125%",
  pointerEvents: "none",
  position: "relative",
});

export const SStockMultiCardImage = styled("div", {
  position: "absolute",
  height: "100%",
  width: "100%",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  overflow: "hidden",
  backgroundColor: "$neutrals-3",
  transition: easing.smooth({ duration: 600, property: "transform" }),

  after: {
    backgroundColor: rgba("system-black", 0.2),
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0,
    transition: easing.smooth({ duration: 600, property: "opacity" }),
    zIndex: 1,
  },
});

export const SStockMultiCardBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "space-between",
  marginTop: "$24",
  pointerEvents: "none",
  transition: easing.smooth({ duration: 600, property: "transform" }),
});

export const SStockMultiCardLink = styled("a", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  textDecoration: "none",
  width: "100%",

  ...multipleSelectors(["hover", "keyboardFocus"], {
    "@media (hover: hover) and (pointer: fine)": {
      [`${SStockMultiCardBody}`]: {
        transform: "translateY(-8px)",
      },

      [`${SStockMultiCardImage}`]: {
        transform: "translateY(-16px)",
      },

      [`${SStockMultiCardImage}::after`]: {
        opacity: 1,
      },

      [`[data-plum-ui="picture"]`]: {
        transform: "scale(1.1)",
      },
    },
  }),

  focus: {
    outline: "none",
  },

  [`[data-plum-ui="picture"]`]: {
    transition: easing.smooth({ duration: 600, property: "transform" }),
  },
});
