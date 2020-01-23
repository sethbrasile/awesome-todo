import { LocalStorage, Loading } from 'quasar';
import { firebaseAuth } from 'boot/firebase';
import showErrorMessage from 'src/utils/show-error-message';

export default {
  registerUser(_, { email, password }) {
    Loading.show();
    firebaseAuth.createUserWithEmailAndPassword(email, password)
      .catch(showErrorMessage)
      .finally(() => Loading.hide())
  },

  loginUser(_, { email, password }) {
    Loading.show();
    firebaseAuth.signInWithEmailAndPassword(email, password)
      .catch(showErrorMessage)
      .finally(() => Loading.hide())
  },

  logoutUser({ dispatch }) {
    firebaseAuth.signOut()
      .catch(showErrorMessage)
      .finally(() => {
        Loading.hide();
        dispatch('tasks/setTasksLoaded',  false, { root: true });
      });
  },

  handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        commit('setLoggedIn', true);
        LocalStorage.set('loggedIn', true);
        this.$router.push('/').catch(() => {});
        dispatch('tasks/fbReadData', null, { root: true });
      } else {
        commit('setLoggedIn', false);
        LocalStorage.set('loggedIn', false);
        this.$router.replace('/auth').catch(() => {});
      }
    });
  }
}
