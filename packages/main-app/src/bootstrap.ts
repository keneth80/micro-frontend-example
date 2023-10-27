import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
// import {createRoot} from 'react-dom/client';

createApp(App).use(router).mount('#app');
