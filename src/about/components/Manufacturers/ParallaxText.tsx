import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Box } from "@/shared/components";

interface ParallaxProps {
  children: any;
  baseVelocity: number;
}

export const ParallaxText = ({
  children,
  baseVelocity = 100,
}: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-15, -35, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t: number, delta: number) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <Box
      css={{
        // overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      <motion.div
        style={{ x, display: "flex", flexWrap: "nowrap", whiteSpace: "nowrap" }}
      >
        <Box>{children}</Box>
        <Box>{children}</Box>
        <Box>{children}</Box>
        <Box>{children}</Box>
        <Box>{children}</Box>
      </motion.div>
    </Box>
  );
};
