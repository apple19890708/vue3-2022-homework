import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue'
import router from './router'
import store from './store'
import { numberWithCommas } from './utils' // 引入千分位
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
  .mixin({
    methods: {
      numberWithCommas,
    },
  })
  .use(store)
  .use(router)
  .use(VueLoading)
  .use(VueAxios, axios)
  .mount('#app')
