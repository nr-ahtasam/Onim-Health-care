/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com','omni.fmmethod.online'], // Add the hostname here
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;