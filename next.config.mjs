import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 's21.ax1x.com' },
            { protocol: 'https', hostname: 'ax1x.com' },
            { protocol: 'https', hostname: 'cdn.jsdmirror.com' },
            { protocol: 'https', hostname: 'www.github.com' },
            { protocol: 'https', hostname: 'github.com' },
            { protocol: 'https', hostname: 'raw.githubusercontent.com' },
            { protocol: 'https', hostname: 'user-images.githubusercontent.com' },
            { protocol: 'https', hostname: 'camo.githubusercontent.com' },
            { protocol: 'https', hostname: 'mailset.top' },
            { protocol: 'https', hostname: 'www.mailset.top' },
            { protocol: 'https', hostname: 'craftmine.fun' },
            { protocol: 'https', hostname: 'youke1.picui.cn' },
            { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
            { protocol: 'https', hostname: 'i0.hdslb.com' },
        ],
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
