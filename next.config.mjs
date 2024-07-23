/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vtqahdoukfytmosthbyu.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
