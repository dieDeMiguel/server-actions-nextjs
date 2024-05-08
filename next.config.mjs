/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "blog-posts-list.s3.eu-central-1.amazonaws.com" },
    ],
  },
};

export default nextConfig;
