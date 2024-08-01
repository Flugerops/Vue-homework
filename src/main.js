import { createApp } from 'vue'

import App from './App.vue'
import BookItem from './components/BookItem.vue'

const app = createApp(App)
app.component('book-item', BookItem)
app.mount('#app')