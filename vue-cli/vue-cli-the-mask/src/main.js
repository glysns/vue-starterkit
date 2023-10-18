import { createApp } from 'vue'
import App from './App.vue'

//lib para disponibilizar as diretivas e recursos
import {mask} from 'vue-the-mask'

const app = createApp(App)

// apelidando a diretiva para nosso projeto
app.directive('mask',mask)

app.mount('#app')
