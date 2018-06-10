import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/auth/Login'
import SignIn from '@/components/auth/SignIn'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '*', component: Login, name: 'login' },
    { path: '/', component: Login, name: 'login' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/sign-in', component: SignIn, name: 'signIn' },
    { path: '/home', component: Home, name: 'home', meta: { requiresAuth: true } }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router
