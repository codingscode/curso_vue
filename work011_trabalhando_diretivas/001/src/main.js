import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {

})

new Vue({
	render: h => h(App),
}).$mount('#app')
