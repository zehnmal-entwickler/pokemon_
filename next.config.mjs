/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
import withBunyan from "next-bunyan";
import withPlugins from 'next-compose-plugins';


const plugins = [[withBunyan]];

dotenv.config();

export default withPlugins(plugins, {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  trailingSlash: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/catalogue/',
        destination: '/catalogue/a',
        permanent: true,
      },
    ]
  },
  poweredByHeader: false,
});
