import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find'
import My from '@/views/My'
import Part from '@/views/Part'
import NotFound from '@/views/NotFound'

import Recommend from '@/views/Second/Recommend'
import Ranking from '@/views/Second/Ranking'
import SongList from '@/views/Second/SongList'
// import VueRouter from 'vue-router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/find",
  },
  {
    path: "/find",
    name: "Find",
    component: Find,
    children: [
      {
        path: 'recommend',
        component: Recommend
      },
      {
        path: 'ranking',
        component: Ranking
      },
      {
        path: 'songlist',
        component: SongList
      },
    ]
  },
  {
    path: "/my",
    name: "My",
    component: My
  },
  {
    path: "/part",
    name: "Part",
    component: Part
  },
  {
    path: "/part/:username",
    component: Part
  },
  {
    path: "*",
    component: NotFound
  }
]
const router = new VueRouter({
  // routes:routes
  routes,
  // mode:"history"
})

const isLogin = false;
router.beforeEach((to, from, next) => {
  if (to.path === "/my" && isLogin === false) {
    alert("qingdneglu")
    next(false);
  }
  else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
