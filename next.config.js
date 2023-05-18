/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com', '17.img.avito.st', 'www.teaelite.ru', 'i.postimg.cc']
  },
  env: {
    HASURA_ENDPOINT: process.env.HASURA_ENDPOINT,
    HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
    FIREBASE_API: process.env.FIREBASE_API,
    FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
    FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
    FIREBASE_APPID: process.env.FIREBASE_APPID,
    FIREBASE_MEASUREMENTID: process.env.FIREBASE_MEASUREMENTID
  }
}

module.exports = nextConfig
module.exports = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
}
