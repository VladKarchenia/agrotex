import { useCallback, useRef, useState } from "react";

import { useSliderCoreContext } from "./state";

export const useSliderPaginationBulletsState = () => {
  const { slider } = useSliderCoreContext();
  const currentSlide = slider?.selectedScrollSnap() || 0;

  const [focusedBullet, setFocusedBullet] = useState<number | null>(null);
  const focusedBulletRef = useRef<HTMLButtonElement | null>(null);

  const isBulletActive = useCallback(
    (bulletGroup: number[]): boolean => {
      return bulletGroup.includes(currentSlide);
    },
    [currentSlide]
  );

  const isBulletPrev = useCallback(
    (bulletGroup: number[]): boolean => {
      return bulletGroup[0] === currentSlide - 1;
    },
    [currentSlide]
  );

  const isBulletNext = useCallback(
    (bulletGroup: number[]): boolean => {
      return bulletGroup[bulletGroup.length - 1] === currentSlide + 1;
    },
    [currentSlide]
  );

  return {
    focusedBullet,
    focusedBulletRef,
    setFocusedBullet,

    isBulletActive,
    isBulletPrev,
    isBulletNext,
  };
};
