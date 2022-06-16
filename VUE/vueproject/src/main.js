import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const Rnd = {
  install: function(Vue) {
    Vue.prototype.$getRandomInt = function(max) {
      return Math.floor(Math.random() * max);
    }
  }
}

Vue.use(Rnd);


new Vue({
  render: h => h(App),
}).$mount('#app')
