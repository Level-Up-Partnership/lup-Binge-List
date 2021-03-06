import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/css/mdb.min.css';

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Axios from 'axios';
import Pagination from 'v-pagination-3';

createApp(App).config.globalProperties.$http = Axios;

createApp(App).use(store).use(router).component('pagination', Pagination).mount('#app');
