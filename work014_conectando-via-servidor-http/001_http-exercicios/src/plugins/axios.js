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
            /*
            if (config.method == 'post') {
               config.method = 'put'
            }*/
            console.log('config aê: ' + config.method)
            return config
       }, error => Promise(error))

       Vue.prototype.$http.interceptors.response.use(res => {
            /*const matriz = []
            for (let chave in res.data) {
                matriz.push({id: chave, ...res.data[chave]})  // ou nome: res.data[chave].nome, email: res.data[chave].email
            }
        
            res.data = matriz*/
            return res
       }, error => Promise.reject(error))
     
    }
})