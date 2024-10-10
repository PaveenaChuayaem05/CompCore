/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdna.pcpartpicker.com',
        pathname: '/static/forever/images/product/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/I/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Add Cloudinary hostname
        pathname: '/dmgkoilib/image/upload/**', // Ensure this path matches the images you're using
      },
    ],
  },
}

export default nextConfig
