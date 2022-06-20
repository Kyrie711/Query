import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts';
import EelementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from "element-ui/lib/transitions/collapse-transition"
Vue.use(EelementUI)
Vue.component(CollapseTransition.name,CollapseTransition)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false  

Vue.use(ElementUI);
new Vue({
  router,
    beforeCreate() {
      Vue.prototype.$bus = this // 安装全局事件总线，$bus 就是当前应用的 vm
    },
  render: h => h(App)
}).$mount('#app')
