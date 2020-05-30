import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import tweets from '../views/Tweets'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'Sign-in',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'Sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/tweets',
    name: 'tweets',
    component: tweets
  },
  {
    path: '/tweets/:tweet_id/replies',
    name: 'replies',
    component: () => import('../views/Reply')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
