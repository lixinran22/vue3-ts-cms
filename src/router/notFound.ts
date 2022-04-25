export default {
  path: '/:pathMath(.*)*',
  name: 'notFound',
  component: () => import('@/views/notFound/notFound.vue')
}
