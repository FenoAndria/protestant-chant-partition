import { createApp } from 'vue'
import './style.css'
// import 'tw-elements';
import App from './App.vue'
import router from './router/index'
import store from './stores/index'
import dayjs from 'dayjs'
import { v4 } from 'uuid';

// import VueAwesomePaginate from "vue-awesome-paginate";
// import "vue-awesome-paginate/dist/style.css";

// import Vue3EasyDataTable from 'vue3-easy-data-table';
// import 'vue3-easy-data-table/dist/style.css';


const app = createApp(App)
// app.component('EasyDataTable', Vue3EasyDataTable);

app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$uuid = v4

// app.use(router).use(store).use(VueAwesomePaginate).mount('#app')
app.use(router).use(store).mount('#app')
