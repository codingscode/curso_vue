import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL= 'https://curso-vue-25e73.firebaseio.com/'

Vue.use({
    install(Vue) {
       //Vue.prototype.$http = axios
       Vue.prototype.$http = axios.create({
           baseURL: 'https://curso-vue-25e73.firebaseio.com/'
       })

       Vue.prototype.$http.interceptors.request.use(config => {
            console.log('config aê: ' + config.method)
            return config
       })
    }
})