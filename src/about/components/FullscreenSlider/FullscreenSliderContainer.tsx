import { Box, useSliderCoreContext } from "@/shared/components";
import { useEffect } from "react";

export const FullscreenSliderContainer: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const { slider } = useSliderCoreContext();

  function onKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "Left":
      case "ArrowLeft":
        slider?.scrollPrev();
        break;

      case "Right":
      case "ArrowRight":
        slider?.scrollNext();
        break;
    }
  }
  useEffect(() => {
    addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slider]);
  return (
    <Box
      css={{
        position: "absolute",
        top: "$0",
        left: "$0",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};
