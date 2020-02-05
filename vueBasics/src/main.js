import Vue from 'vue'
import App from './App.vue'
import Message from './Message.vue'     // import ObjectName from ComponentFile
import Button from './Button.vue'

Vue.component('app-message', Message)   // selectorName, ObjectName
Vue.component('on-off-button', Button)


new Vue({
  el: '#app',
  render: h => h(App)                   // renders App.vue file
})
