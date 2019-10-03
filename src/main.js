
import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Button from "ant-design-vue/lib/button";
import "ant-design-vue/dist/antd.css";
Vue.component(Button.name, Button);
Vue.config.productionTip = false;
Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
  router: router,
  template:'<router-view></router-view>'
}).$mount('#app')

