import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from 'vue-kinesis'
import { CursorFx } from '@luxdamore/vue-cursor-fx'
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css'
import SmoothVuebar from 'vue-smooth-scrollbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(SmoothVuebar, {
  listener: () => {},
  options: {}
})

Vue.component(
  CursorFx.name,
  CursorFx
)
Vue.use(VueKinesis)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
