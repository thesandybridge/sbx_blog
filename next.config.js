/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  experimental: {appDir: true},
  reactStrictMode: false,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}

module.exports = nextConfig