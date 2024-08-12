import NextBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
let nextConfig = {}

nextConfig = withBundleAnalyzer(nextConfig)

export default nextConfig;