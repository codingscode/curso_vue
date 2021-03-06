import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
//import Usuario from './components/usuario/Usuario'

//import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
//import UsuarioEditar from './components/usuario/UsuarioEditar'
//import UsuarioLista from './components/usuario/UsuarioLista'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'


Vue.use(Router)

const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')

const router = new Router({
    mode: 'history', // ou 'hash'
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
           return savedPosition
        }
        else if (to.hash) {
            return {selector: to.hash}
        }
        else { return {x: 0, y: 0} }
    },    
    routes: [
       {name: 'inicio', path: '/', /* component: Inicio */components: {
            default: Inicio,
            menu: Menu
          }
       },
       {path: '/usuario', /* component: Usuario */ components: {
                 default: Usuario, menu: MenuAlt, menuInferior: MenuAlt
            }
            , props: true,
            children: [
                    {path: '', component: UsuarioLista},
                    {path: ':id', component: UsuarioDetalhe, props: true, 
                      beforeEnter: (to, from, next) => {
                          console.log('antes da rota -> usuario detalhe')
                          next()
                      }
                    },
                    {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'}
            ]
        },
        {path: '/redirecionar', redirect: '/usuario'},
        {path: '*', redirect: '/'}
    ]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global*')
    next()
})

/* 1) ir em Network -> 0.js -> Headers -> Purpose: prefetch
   2) manter Network limpo -> Usuários -> Usuario2 -> editar -> 0.js em Network -> Preview
   3) no inicial limpo f5 -> ver 0.js, 1.js, 2.js, 3.js
   4) observar o Network em ->  Usuários -> Usuario2 -> editar -> 0.js em Network -> Preview 
*/
export default router