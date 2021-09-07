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

module.exports = nextConfig;