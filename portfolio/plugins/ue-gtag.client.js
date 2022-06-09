import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  const getGDPR = localStorage.getItem('GDPR:accepted');
  const config = useRuntimeConfig();

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: config.GOOGLE_ANALYTICS_ID
    },
    
    appName: 'Portfolio',
    enabled: getGDPR === 'true',
    pageTrackerScreenviewEnabled: true
  }, nuxtApp.vueApp.router);
});