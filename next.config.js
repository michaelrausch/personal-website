const nextConfig = {
  webpack: function (config) {
      config.module.rules.push({
          test: /\.md$/,
          use: "raw-loader",
      });
      return config;
  },
  redirects: async () => {
      return [
          
      ]
  }
};

const withFonts = require('next-fonts');

const withTM = require('next-transpile-modules')([
  '@react95/core',
  '@react95/icons',
]);

module.exports = withTM(withFonts(nextConfig));