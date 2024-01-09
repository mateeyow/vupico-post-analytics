/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

const nextConfig = withNextIntl({
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/en',
  //       permanent: true
  //     }
  //   ]
  // }
})

module.exports = nextConfig
