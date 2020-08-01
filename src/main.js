import Vue from 'vue'
import App from './App.vue'
import router from './js/router'
import VueAxios from 'vue-axios'

import vuetify from './plugins/vuetify';
import store from './js/store'
import axios from 'axios'


import Tabs from "@/views/tabs/tabs.vue"
Vue.component("tabs-app", Tabs);


import modalApp from "@/components/modal.vue";
Vue.component("modal-app", modalApp);


import Menu from "@/components/Menu.vue"
Vue.component("menu-app", Menu);

import Carousel from "@/components/carousel.vue"
Vue.component("carousel-app", Carousel);

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')