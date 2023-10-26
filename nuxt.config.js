export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'xiaojianit',
    htmlAttrs: {
      lang: 'zh-cn'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '全平台学习资源分享' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "./static/format.css",
    "element-ui/lib/theme-chalk/index.css",
    "./static/elementTheme/theme/index.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/dayjs'
  ],
  dayjs: {
    locales: ['en', 'ja'],
    defaultLocale: 'en'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true,
    prefix: '/api',
    credentials: true
  },
  proxy: {
    '/api': {
      // 目标接口域
      target: 'http://127.0.0.1:3004',
      // 全局配置是否跨域
      changeOrigin: true,
      pathRewrite: {
        // 单个配置是否跨域
        // changeOrigin: true
        // 把 '/api' 替换成 '/'，具体需要替换为 '' 还是 '/' 看自己习惯
        '^/api': ''
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['axios']
  }
}
