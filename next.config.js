/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_CAIXA_URL: process.env.API_CAIXA_URL,
  }
}

module.exports = nextConfig
