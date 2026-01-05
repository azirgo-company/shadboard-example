/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "refine-crm.ams3.cdn.digitaloceanspaces.com",
      },
    ],
  },
}

export default nextConfig
