/**
 * @type {import('next').NextConfig}
 */
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching: [{
      // Routing via a matchCallback function:
      urlPattern: '**/\.(?:html|js|css|jpg|png|svg)$/,',
      handler:'NetworkFirst'
  }]
})

const nextConfig = withPWA({
  /* config options here */

  //IMAGE LOADER
  images: {
    unoptimized: true,
  },

  //TRAILING SLASHES
  trailingSlash: true,

  //REDIRECTS
  async redirects() {
    return [
      {
        source: '/redirect-test',
        destination: '/',
        permanent: true,
      },
    ]
  }

})



/*module.exports = withPWA({
  // next.js config
})*/

module.exports = nextConfig