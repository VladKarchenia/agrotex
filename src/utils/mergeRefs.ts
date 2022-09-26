import { Ref } from "react";

export const mergeRefs = (refs: (Ref<HTMLElement | null> | null)[]) => {
  return (value: HTMLElement | HTMLDivElement | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        // @ts-ignore
        ref.current = value;
      }
    });
  };
};
