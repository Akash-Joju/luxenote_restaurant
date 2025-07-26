/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.pinimg.com', 'images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint build breaking errors
  },
}

export default nextConfig;
