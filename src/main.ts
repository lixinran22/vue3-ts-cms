import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/base.less'
import 'normalize.css'
import { globalRegister } from '@/global/index'
import { setupStore } from '@/store/index'

const app = createApp(App)
globalRegister(app)
app.use(setupStore)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
// 注册全局方法
app.config.globalProperties.$filters = {
  // 格式化时间
  formatTime(val: string) {
    console.log(val)
  }
}
// console.log(process.env.VUE_APP_BASE_URL)
// app.use(globalRegister)
// app.use({
//   install: globalRegister
// })
//app.use() 参数可以是函数也可以是对象，会直接执行参数或者install的方法
