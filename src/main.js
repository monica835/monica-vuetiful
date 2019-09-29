
import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// Vue.use(VueSidebarMenu)
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
Vue.use(Antd) 
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
  router: router,
  template:'<router-view></router-view>'
}).$mount('#app')

