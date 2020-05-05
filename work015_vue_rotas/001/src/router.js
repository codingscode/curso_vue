import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'



Vue.use(Router)

export default new Router({
    routes: [
       {path: '/', component: Inicio},
       {path: '/usuario', component: Usuario}
    ]
})








