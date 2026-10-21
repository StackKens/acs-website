/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Formats are negotiated per request and served as WebP or AVIF where
    // the browser supports them, with the source image as the fallback.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
