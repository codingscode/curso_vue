import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'

import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import UsuarioLista from './components/usuario/UsuarioLista'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'


Vue.use(Router)

export default new Router({
    mode: 'history', // ou 'hash'
    routes: [
       {name: 'inicio', path: '/', /* component: Inicio */components: {
            default: Inicio,
            menu: Menu
          }
       },
       {path: '/usuario', /* component: Usuario */ components: {
                 default: Usuario, menu: MenuAlt
            }
            , props: true,
            children: [
                    {path: '', component: UsuarioLista},
                    {path: ':id', component: UsuarioDetalhe, props: true},
                    {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'}
            ]
        }
    ]
})








