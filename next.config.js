/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['via.placeholder.com', 'localhost'],
  },
  // comment for render twice issue
  // avoid cors with proxy
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://nodal-buckeye-404908.de.r.appspot.com/:path*', // Proxy to Backend
  //     },
  //   ]
  // },
}

module.exports = nextConfig
