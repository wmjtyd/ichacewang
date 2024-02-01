// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ['echarts/core', 'echarts/charts', 'echarts/features', 'echarts/renderers']
    }
  }
})


//console.log(process.env.HOST); // 应该输出 0.0.0.0
//console.log(process.env.NUXT_PORT); // 应该输出 6000