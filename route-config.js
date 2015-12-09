export function configRouter (router) {

  // normal routes
  router.map({

    '/about': {
      component: require('./components/about.vue')
    },

    '/home': {
      component: require('./components/home.vue'),
      subRoutes: {
        'events/:eventId': {
          component: require('./components/event.vue')
        }
      }
    },

    '*': {
      component: require('./components/404.vue')
    }
  })

  // redirect
  router.redirect({
    '/info': '/about',
    '/': '/home'
  })

}