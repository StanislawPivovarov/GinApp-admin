/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.postimg.cc'],
  },
  env: {
    NEXT_PUBLIC_HASURA_ENDPOINT: process.env.HASURA_ENDPOINT,
    NEXT_PUBLIC_HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
    NEXT_PUBLIC_FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
    NEXT_PUBLIC_FIREBASE_APPID: process.env.FIREBASE_APPID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENTID: process.env.FIREBASE_MEASUREMENTID,
  },

  pageExtensions: ["tsx", "ts", "jsx", "js"],
};

module.exports = nextConfig;
