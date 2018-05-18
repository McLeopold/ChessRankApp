import Vue from 'vue'
import Router from 'vue-router'
import Games from '@/components/Games'
import AddGame from '@/components/AddGame'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/games',
      name: 'Games',
      component: Games,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add-game',
      name: 'AddGame',
      component: AddGame,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next ('games')
  else next()
})

export default router
