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

  logoutUser() {
    firebaseAuth.signOut()
      .catch(showErrorMessage)
      .finally(() => Loading.hide());
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
        dispatch('tasks/clearState', null, { root: true });
        LocalStorage.set('loggedIn', false);
        this.$router.replace('/auth').catch(() => {});
      }
    });
  }
}
