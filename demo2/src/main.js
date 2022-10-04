import Vue from 'vue'
import App from './d12.vue'
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false

Vue.filter("reverse",(val,s) =>{
  return val.split("").reverse().join(s)
});


new Vue({
  render: h => h(App),
}).$mount('#app')
