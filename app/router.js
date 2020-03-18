'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.prefix('/api')
  router.get('/', controller.home.index)
  router.resources('users', '/users', controller.users)
  router.resources('tasks', '/tasks', controller.tasks)
}
