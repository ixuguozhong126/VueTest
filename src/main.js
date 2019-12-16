import Vue from 'vue'
import App from './App.vue'

Vue.component('p-item', {
  props:['item'],
  template: '<p>{{item.text}}</p>'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
