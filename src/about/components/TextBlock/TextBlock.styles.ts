import { styled } from "@/config";

export const STextBlock = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "300px",
  padding: "24px",

  variants: {
    hasShadow: {
      true: {
        boxShadow: "0 4px 4px black",
      },
    },
  },
});

export const STextCopy = styled("span", {
  color: "$brand-yellow-darker",

  variants: {
    bold: {
      true: {
        fontWeight: 500,
      },
    },
  },
});
