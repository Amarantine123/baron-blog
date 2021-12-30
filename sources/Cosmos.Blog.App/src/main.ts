import { createApp } from 'vue'
import { 
    ConfigProvider, 
    DatePicker, 
    Button,
    Menu,
    Layout,
} from 'ant-design-vue'
import router from '@/router/index'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import 'remixicon/fonts/remixicon.css'
const app = createApp(App);
app
    .use(router)
    .use(DatePicker)
    .use(Button)
    .use(ConfigProvider)
    .use(Menu)
    .use(Layout)
    .mount('#app')