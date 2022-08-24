import { createApp, isVue2, Vue2 } from 'vue-demi'
import Counter from './components/Counter/Counter.vue'

if (isVue2) {
  new Vue2(Counter).$mount('#app')
} else {
  createApp(Counter).mount('#app')
}