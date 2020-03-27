import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode) {        //binding e vnode nesse caso podem ser omitidos
		//el.style.backgroundColor = 'lightgreen'
		el.style.backgroundColor = binding.value
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
