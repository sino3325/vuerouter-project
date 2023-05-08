import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/main/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 「戻る」ボタンでの移動は以前の位置を保持
    if (savedPosition) {
      return savedPosition
    } else {
      // ハッシュ(#～)がある場合は指定の要素位置へ移動
      if (to.hash) {
        return { el: to.hash, behavior: 'smooth' }
        // さもなくば先頭位置に移動
      } else {
        return { top: 0 }
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        main: HomeView
      },
      meta: {
        title: 'Homeページ'
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        main: () => import('../views/main/AboutView.vue')
      },
      meta: {
        title: 'Aboutページ'
      }
    }
  ]
})

/**
 * SPAサイトにおいて<title></title>の中身をmetaオプションによって定義できるようにするための記述
 * @see https://www.youtube.com/watch?v=W6qpsmkuJ8c&list=PLNY57F6tC4fx8VH7wvyYJtw0JJoDVXc1J&index=1
 */
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
