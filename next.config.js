require("dotenv").config();

const path = require("path");
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  i18n,
  webpack(config, options) {
    const { dir, isServer, dev } = options;
    config.resolve.alias["@"] = path.join(__dirname, "./");

    if (!dev) {
      config.devtool = "source-map";
    }

    return config;
  },
};

module.exports = nextConfig;
