
export default {
  mode: 'spa',
  router: {
    base: '/cv/',
    mode: 'hash',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Petro Kozhushko',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'icons/pk.svg' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'assets/pageAnimation.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/eventBus.js',
    { src: "~plugins/vue-particles", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  extend(config, { isDev, isClient }) {
    config.module.rules.forEach(rule => {
      if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
        // add a second loader when loading images
        rule.use.push({
          loader: 'image-webpack-loader',
          options: {
            svgo: {
              plugins: [
                // use these settings for internet explorer for proper scalable SVGs
                // https://css-tricks.com/scale-svg/
                { removeViewBox: false },
                { removeDimensions: true }
              ]
            }
          }
        })
      }
    })
  }
}
