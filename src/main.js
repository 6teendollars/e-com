import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router' 
import './assets/fonts.css';
import { createPinia } from 'pinia';
import { useCartStore, setupCartPersistence } from './stores/counter';

const app = createApp(App);

// 1️⃣ Подключаем Pinia и роутер к приложению
const pinia = createPinia();
app.use(pinia);
app.use(router);

// 2️⃣ Теперь можно создавать store и вызывать setupCartPersistence
const cart = useCartStore();
setupCartPersistence(cart);

// 3️⃣ Монтируем приложение
app.mount('#app');
