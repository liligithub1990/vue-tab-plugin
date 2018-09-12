import Vue from 'vue'
import App from './App.vue'
import Tab from './components/tab'

Vue.use(Tab);

new Vue({
  el: '#app',
  render: h => h(App)
})

