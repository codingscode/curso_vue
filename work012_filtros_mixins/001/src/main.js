import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor) {
    return valor.split('').reverse().join('')
})

Vue.mixin({
    created() {
       console.log('Created - Mixin Global!')
    },
    data() {
        return {
           global: 'Estou no Mixin Global'
        }
    }
})

new Vue({
    render: h => h(App),
    created() {
        console.log('Created - dentro de new Vue!')
     }
}).$mount('#app')
