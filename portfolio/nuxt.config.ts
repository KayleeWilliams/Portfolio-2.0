import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    vite: {
    plugins: [
        Icons({
        // the feature below is experimental ⬇️
        autoInstall: true
      })
    ]
  }
})