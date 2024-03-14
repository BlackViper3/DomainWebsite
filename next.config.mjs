/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
          {
            source: "/",
            destination: "/home",
          },
        ];
      },
    output: "export"

};

export default nextConfig;
