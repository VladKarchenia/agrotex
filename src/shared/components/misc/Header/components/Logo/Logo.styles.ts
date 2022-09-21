import { styled } from "@/config";

export const SLogo = styled("div", {
  width: 150,
  transition: "150ms color ease-out",

  "@max-xs": {
    width: 120,
  },

  "@lg": {
    width: 144,
  },

  svg: {
    display: "block",
    maxWidth: "100%",
  },

  variants: {
    color: {
      dark: { color: "$neutrals-9" },
      white: { color: "$neutrals-0" },
    },
  },
});
