import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
