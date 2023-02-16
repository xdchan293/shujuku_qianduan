import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false

axios.defaults.baseURL = `http://43.156.3.86:8800/`
    // axios.defaults.baseURL = '/api'
    // axios.defaults.baseURL = `http://localhost:8800/`
axios.defaults.crossDomain = true
    // axios.chan
    //Access-Control-Allow-Origin 指向前端 ip:port
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.VUE_APP_Access_Control_Allow_Origin;
    // Date.prototype.Format = function (fmt) { // author: meizz
    //     var o = {
    //         "M+": this.getMonth() + 1, // 月份
    //         "d+": this.getDate(), // 日
    //         "h+": this.getHours(), // 小时
    //         "m+": this.getMinutes(), // 分
    //         "s+": this.getSeconds(), // 秒
    //         "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    //         "S": this.getMilliseconds() // 毫秒
    //     };
    //     if (/(y+)/.test(fmt))
    //         fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    //     for (var k in o)
    //         if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    //             return fmt;
    // }

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    moment,
    render: h => h(App)
}).$mount('#app')