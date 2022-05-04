/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['cdn.sanity.io'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
