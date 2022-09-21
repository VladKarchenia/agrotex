module.exports = {
  i18n: {
    defaultLocale: "en",
    fallbackLng: ["en"],
    locales: ["en"],
    defaultNS: "app",
    efaultLanguage: "en",
    ns: ["app"],
    browserLanguageDetection: true,
    serverLanguageDetection: true,
    debug: false,
    detection: {
      lookupCookie: "i18n.langtag",
      order: ["querystring", "cookie", "header", "navigator"],
      caches: [],
    },
    load: "currentOnly",
  },
  localePath: typeof window === "undefined" ? "public/locales" : "locales",
};
