import Vue from 'vue'
import App from './App.vue'

import VueMockLayout from '../src/index.js'
Vue.component('vue-mock-layout', VueMockLayout)

new Vue({
  el: '#app',
  render: h => h(App)
})
