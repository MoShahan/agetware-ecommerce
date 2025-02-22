module.exports = {
  presets: [
    "@babel/preset-env", // To compile modern JavaScript
    [
      "@babel/preset-react", // To handle JSX
      {
        runtime: "automatic", // No need to import React manually (React 17+)
      },
    ],
    "@babel/preset-typescript", // For TypeScript syntax
  ],
};
