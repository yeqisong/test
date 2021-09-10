import { createApp } from 'vue'
import store from '../../store'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
// app.use(ElementPlus)
// app.use(Antd)
app.use(store)
app.mount('#app')
