import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
      title: "Kaylee Williams Portfolio",
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta:[{ name: 'description', content: "Hi, I'm Kaylee Williams, a Software Engineer. Come check out some of the projects I've worked on!" }],
    },

    modules: ['@nuxtjs/tailwindcss'],
    vite: {
    plugins: [
        Icons({
        autoInstall: true
      })
    ]
  }
})