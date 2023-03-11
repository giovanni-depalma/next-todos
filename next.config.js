/** @type {import('next').NextConfig} */
const withTwin = require('./withTwin.js')
const nextConfig = withTwin({
  experimental: {
    appDir: true,
  },
})

module.exports = nextConfig
