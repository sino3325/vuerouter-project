import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// 個々のコンポーネントで発生した例外を、個々のコンポーネントで処理されなかったときに最終的に処理するための記述
app.config.errorHandler = (error, vm, info) => {
  // console.error(`エラー: ${error}`);
  console.log(`エラー: ${error}`)
  console.log(`vm: ${vm}`)
  console.log(`info: ${info}`)
}

app.mount('#app')
