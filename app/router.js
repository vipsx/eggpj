/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/create', controller.user.create);
  router.get('/user/create', controller.user.create);
};
