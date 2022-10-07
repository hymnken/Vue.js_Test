import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


Vue.directive("gfocus",{
  inserted(el){
    console.log(el);
    el.focus()
  }
})

Vue.directive("color",{
  inserted(el,binding){
    el.style.color = binding.value
  },
  update(el,binding){
    el.style.color = binding.value
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
