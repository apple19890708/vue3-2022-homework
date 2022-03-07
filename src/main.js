import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {
  Field, Form, defineRule, configure, ErrorMessage
} from "vee-validate";
import VueNextSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'
import VueFlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import AllRules from '@vee-validate/rules'; // v-validate所有規則
import { localize, setLocale } from '@vee-validate/i18n'; // 導入多國語系
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import zhTW from "./zh_TW.json";
import App from './App.vue'
import router from './router'
import store from './store'
import { numberWithCommas } from './utils' // 引入千分位

library.add(fab, fas, far)

Object.keys(AllRules).forEach((rule) => { // v-validate引入所有規則
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

createApp(App)
  .mixin({
    methods: {
      numberWithCommas,
    },
  })
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('Field', Field)
  .component('Form', Form)
  .component('ErrorMessage', ErrorMessage)
  .component('vue-select', VueNextSelect)
  .component('Loading', VueLoading)
  .use(VueFlatPickr)
  .use(VueLoading)
  .use(VueAxios, axios)
  .mount('#app')
