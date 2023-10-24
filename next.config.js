/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true
  // experimental: {
  //   serverComponentsExternalPackages: ["argon2"]
  // },
  // webpack: (config) => {
  //   config.externals = [...config.externals, "argon2"];
  //   return config;
  // }
};

module.exports = nextConfig;
