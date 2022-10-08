import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find'
import My from '@/views/My'
import Part from '@/views/Part'

// import VueRouter from 'vue-router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes =[
  {
    path:"/find",
    component:Find
  },
  {
    path:"/my",
    component:My
  },
  {
    path:"/part",
    component:Part
  },{
    path:"/part/:username",
    component:Part
  }
]
const router = new VueRouter({
  // routes:routes
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
