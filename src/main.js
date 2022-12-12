import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMapPin, faLaptop, faCode, faMagnifyingGlass, faHouse, faCircleInfo, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'


library.add(faMapPin, faLaptop, faCode, faMagnifyingGlass, faGithub, faHouse, faCircleInfo, faThumbsUp, faThumbsDown)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
