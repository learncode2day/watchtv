/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // '/blog/nextjs': { page: '/blog/[post]/comment/[id]' },        // wrong
      '/tv/[slug]/season/1': { page: '/tv/[slug]/season/[id]' }, // correct
    }
  },
};

module.exports = nextConfig;
