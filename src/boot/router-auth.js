import { LocalStorage } from 'quasar';

const authPath = '/auth';

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    if (LocalStorage.getItem('loggedIn')) {
      next();
    } else if (to.path === authPath) {
      next();
    } else {
      next(authPath);
    }
  });
}
