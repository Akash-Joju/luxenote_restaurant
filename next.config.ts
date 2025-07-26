import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pinimg.com', 'images.unsplash.com'], // include any domain used in <Image />
  },
};

export default nextConfig;
