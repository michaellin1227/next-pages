/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    API_SERVER: 'http://localhost:3002'
  }
}

module.exports = nextConfig
