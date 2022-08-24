import { defineConfig } from 'vite'
import { isVue2 } from 'vue-demi'
import Vue2 from '@vitejs/plugin-vue2'
import Vue3 from '@vitejs/plugin-vue'

console.log('isVue2', isVue2)
export default defineConfig({
  plugins: [
    isVue2 ? Vue2() : Vue3(),
  ],
})
