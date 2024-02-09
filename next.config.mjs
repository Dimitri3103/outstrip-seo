/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        config.resolve.fallback = { fs: false, os: false, path: false };
        return config;
    },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3005',
            pathname: '/media/**',
          },
        ],
      },
};

export default nextConfig;
