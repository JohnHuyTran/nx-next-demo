//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    svgr: false,
  },
  webpack: (
    config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Enable caching for static assets
    config.cache = {
      type: 'filesystem',
      cacheDirectory: '.next/cache' || '.next/cacheJest',

    };
    return config;
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
