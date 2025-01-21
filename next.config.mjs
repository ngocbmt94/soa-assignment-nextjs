/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.toString().includes("svg"));

    if (fileLoaderRule) {
      // Modify the existing file loader rule to ignore *.svg files
      fileLoaderRule.exclude = /\.svg$/i;

      // Add new rules for handling SVGs
      config.module.rules.push(
        // Reapply the existing file loader rule for *.svg?url imports
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // Matches *.svg?url
        },
        // Add a rule for using @svgr/webpack for all other *.svg imports
        {
          test: /\.svg$/i,
          resourceQuery: { not: [/url/] }, // Excludes *.svg?url
          use: ["@svgr/webpack"],
        }
      );
    }

    return config;
  },
};

export default nextConfig;
