import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "topnochwealth.com" }],
        destination: "https://topnochenterprises.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.topnochwealth.com" }],
        destination: "https://topnochenterprises.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
