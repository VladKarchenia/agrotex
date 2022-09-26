import { styled } from "@/config";
import { multipleSelectors } from "@/utils";

export const SSliderNavigation = styled("div", {
  display: "flex",
});

export const SSliderNavigationArrow = styled("button", {
  reset: true,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$neutrals-7",
  cursor: "pointer",
  transition: "150ms ease-out",

  ...multipleSelectors(["hover", "keyboardFocus"], {
    color: "$neutrals-9",
  }),

  disabled: {
    pointerEvents: "none",
    opacity: 0.25,
  },

  variants: {
    variant: {
      default: {},
      rounded: {
        borderRadius: 4,
        backgroundColor: "$neutrals-0",

        ...multipleSelectors(["hover", "keyboardFocus"], {
          backgroundColor: "$neutrals-2",
        }),

        keyboardFocus: {
          boxShadow: "inset 0 0 0 1px $colors$neutrals-5",
        },

        active: {
          transform: "scale(0.9)",
        },
      },
    },
  },
});
