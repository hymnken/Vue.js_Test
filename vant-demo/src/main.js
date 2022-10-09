import Vue from 'vue'
import App from './App.vue'

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);
import {Button, Form ,Field} from 'vant';
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
