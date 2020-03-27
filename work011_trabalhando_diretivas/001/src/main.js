import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode) {        //binding e vnode nesse caso podem ser omitidos
		//el.style.backgroundColor = 'lightgreen'

        let atraso = 0
		if (binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			}
			else {
				el.style.color = binding.value
			}
		}, atraso)
		
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
