/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_LOTERIA_URL: process.env.API_LOTERIA_URL,
    API_LOTERIA_TOKEN: process.env.API_LOTERIA_TOKEN,
  }
}

module.exports = nextConfig
