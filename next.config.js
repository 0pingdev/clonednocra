/** @type {import('next').NextConfig} 
const nextConfig = {}

module.exports = nextConfig
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aknocraclone',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
