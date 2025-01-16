import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

library.add(faGithubSquare)
library.add(faLinkedin)
library.add(faSquareEnvelope)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
