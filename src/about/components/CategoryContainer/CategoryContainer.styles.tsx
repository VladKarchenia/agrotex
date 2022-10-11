import { styled } from "@/config";
import { Box, Copy } from "@/shared/components";
import { rgba } from "@/utils";

export const SCategoryContainer = styled(Box, {
  width: "100%",
  height: "$192",
  padding: "$24",
  backgroundColor: "$brand-blue-darkest",
  flexGrow: 1,
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",

  "@md": {
    width: "auto",
  },

  before: {
    content: "",
    position: "absolute",
    top: "$0",
    bottom: "$0",
    left: "$0",
    right: "$0",
    margin: "0 auto",
    pointerEvents: "none",
    transition: "350ms ease-out",
  },

  hover: {
    before: {
      boxShadow: `0 0 0 15px ${rgba("neutrals-0", 0.2)} inset`,
    },
  },

  variants: {
    grow: {
      true: {
        "@md": {
          flexGrow: 2,
        },
      },
    },
  },

  defaultVariants: {
    grow: false,
  },
});

export const SCategoryTitle = styled(Copy, {});
