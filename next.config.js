module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};
