import './env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = (() => {
  const remotePatterns = process.env.NODE_ENV === 'development' ? [{ hostname: '*.unsplash.com' }] : [];

  return { images: { remotePatterns } };
})();

export default nextConfig;
