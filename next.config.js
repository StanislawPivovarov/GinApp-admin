/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com', '17.img.avito.st']
  },
  env: {
    HASURA_ENDPOINT: process.env.HASURA_ENDPOINT,
    HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET
  }
}

module.exports = nextConfig
