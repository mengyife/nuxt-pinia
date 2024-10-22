// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  devtools: { enabled: true },
  plugins: [{ src: '~/plugins/vee-validate.client.js', mode: 'client' }],
})