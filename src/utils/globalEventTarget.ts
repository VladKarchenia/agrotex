export const getGlobalEventTarget = (): NodeJS.Global | typeof globalThis | Window | null => {
  if (typeof global !== "undefined" && global.addEventListener) {
    return global;
  }

  if (typeof globalThis !== "undefined" && globalThis.addEventListener) {
    return globalThis;
  }

  if (typeof window !== "undefined" && window.addEventListener) {
    return window;
  }

  return null;
};

export const globalEventTarget = getGlobalEventTarget();
