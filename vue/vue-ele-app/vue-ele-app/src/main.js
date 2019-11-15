// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './common/stylus/index.styl'
import moment from 'moment'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// Vue.use(axios)
Vue.prototype.$http = axios
Vue.prototype.$moment = moment;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})