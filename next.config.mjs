import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    images: {
        remotePatterns: [new URL('https://s21.ax1x.com/**')],
    },
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/docs/:path*.mdx',
                destination: '/llms.mdx/docs/:path*',
            },
        ];
    },
};

export default withMDX(config);
