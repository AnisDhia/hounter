import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { Vue3Marquee } from 'vue3-marquee'

loadFonts()

createApp(App)
  .use(vuetify).use(Vue3Marquee)
  .mount('#app')
