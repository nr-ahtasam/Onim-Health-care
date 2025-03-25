/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '**',
            },{
                protocol: 'https',
                hostname: 'omni.fmmethod.online',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;