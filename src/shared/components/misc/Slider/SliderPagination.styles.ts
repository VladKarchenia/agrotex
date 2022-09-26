import { styled } from "@/config";

export const SSliderPagination = styled("div", {
  color: "$neutrals-0",
  position: "relative",
  marginX: "auto",
  textAlign: "center",

  variants: {
    dynamic: {
      true: {
        overflow: "hidden",

        "&::after": {
          content: "''",
          position: "absolute",
          top: "$4",
          left: 0,
          right: 0,
          bottom: "$4",
          pointerEvents: "none",
          background: `linear-gradient(
            90deg,
            #ffffff 0%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0) 60%,
            #ffffff 100%
          )`,
        },
      },
    },
  },
});

export const SSliderPaginationTrack = styled("div", {
  display: "inline-flex",
  marginX: "auto",
  whiteSpace: "nowrap",
  transition: "350ms ease-out",
});

export const SSliderPaginationBullet = styled("button", {
  reset: true,
  cursor: "pointer",
  marginX: "$4",
  padding: "$4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "$16",
  width: "$16",
  transition: "350ms ease-out",
  opacity: 0.5,

  hover: {
    opacity: 1,
  },

  "&[data-state='active']": {
    opacity: 1,
  },

  variants: {
    dynamic: {
      true: {
        marginX: 0,
        transform: "scale(0.5)",

        "&[data-state='prev'], &[data-state='next']": {
          transform: "scale(0.75)",
        },

        "&[data-state='active']": {
          transform: "scale(1)",
        },
      },
    },
  },
});

export const SSliderPaginationBulletIcon = styled("span", {
  width: "$8",
  height: "$8",
  backgroundColor: "currentColor",
  borderRadius: 4,
  display: "block",
});
