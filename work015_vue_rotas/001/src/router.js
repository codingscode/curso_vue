import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'

import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import UsuarioLista from './components/usuario/UsuarioLista'


Vue.use(Router)

export default new Router({
    mode: 'history', // ou 'hash'
    routes: [
       {path: '/', component: Inicio},
       {path: '/usuario', component: Usuario, props: true,
            children: [
                    {path: '', component: UsuarioLista},
                    {path: ':id', component: UsuarioDetalhe, props: true},
                    {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'}
            ]
        }
    ]
})








