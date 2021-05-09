import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from 'vue-kinesis'
import { CursorFx } from '@luxdamore/vue-cursor-fx'
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css'
import SmoothScrollbar from 'vue-smooth-scrollbar'

Vue.component(
  CursorFx.name,
  CursorFx
)
Vue.use(VueKinesis)

Vue.use(SmoothScrollbar)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
