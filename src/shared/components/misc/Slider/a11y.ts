import { EmblaCarouselType } from "embla-carousel-react";

import { SLIDER_MOVE_EVENT } from "./utils";

export const setupA11y = (embla: EmblaCarouselType, autoFocus: boolean) => {
  let cleanupFn = () => {};

  if (embla.containerNode()) {
    initA11y();
  } else {
    embla.on("init", initA11y);
  }

  function initA11y() {
    embla.on("reInit", reInit);
    embla.on("destroy", cleanup);

    const targetNode = embla.containerNode().parentNode as HTMLElement;
    const parentNode = targetNode.parentNode as HTMLElement;

    const slidesAmount = embla.scrollSnapList().length;

    const liveRegionNode = parentNode.querySelector("[data-plum-ui='slider-live-region']");

    let isFocused = false;

    targetNode.setAttribute("tabIndex", "0");

    targetNode.addEventListener("focus", onFocus);
    targetNode.addEventListener("blur", onBlur);

    document.addEventListener("keydown", onKeyDown);

    if (autoFocus) {
      targetNode.focus();
    }

    onSliderMove();
    document.addEventListener(SLIDER_MOVE_EVENT, onSliderMove);

    cleanupFn = cleanup;

    function onFocus() {
      isFocused = true;
    }

    function onBlur() {
      isFocused = false;
    }

    function onKeyDown(e: KeyboardEvent) {
      if (!isFocused) return;

      switch (e.key) {
        case "Left":
        case "ArrowLeft":
          embla.scrollPrev();
          break;

        case "Right":
        case "ArrowRight":
          embla.scrollNext();
          break;
      }
    }

    function onSliderMove() {
      if (liveRegionNode) {
        liveRegionNode.textContent = `${embla.selectedScrollSnap() + 1} - ${slidesAmount}`;
      }
    }

    function reInit() {
      cleanup();
      initA11y();
    }

    function cleanup() {
      embla.off("reInit", reInit);
      embla.off("destroy", cleanup);

      targetNode.removeEventListener("focus", onFocus);
      targetNode.removeEventListener("blur", onBlur);

      document.removeEventListener("keydown", onKeyDown);

      document.removeEventListener(SLIDER_MOVE_EVENT, onSliderMove);
    }
  }

  return () => {
    cleanupFn();
  };
};
