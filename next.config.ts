import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  turbopack: {},
  async rewrites() {
    return [
      { source: "/img/gpc/:path*", destination: "https://www.gpcmedical.com/product-large-images/:path*" },
      { source: "/img/gpc-sm/:path*", destination: "https://www.gpcmedical.com/product-small-images/:path*" },
      { source: "/img/hardik/:path*", destination: "https://hardikinternational.com/wp-content/uploads/:path*" },
      { source: "/img/sharma/:path*", destination: "https://www.sharmaortho.com/images/Prd/:path*" },
      { source: "/img/narang/:path*", destination: "https://www.orthopaedic-implants.com/img/thumbnail/:path*" },
      { source: "/img/meril/:path*", destination: "https://meril.com/wp-content/uploads/:path*" },
      { source: "/img/tetramed/:path*", destination: "https://tetramed.com/wp-content/uploads/:path*" },
    ];
  },
};

export default withPWA({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
})(nextConfig);
