import { LocalStorage } from 'quasar';
import { firebaseAuth } from 'boot/firebase';

export default {
  registerUser(_, { email, password }) {
    firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(err => console.error(err.message));
  },

  loginUser(_, { email, password }) {
    firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(err => console.error(err.message));
  },

  logoutUser() {
    firebaseAuth.signOut()
      .then(res => console.log(res))
      .catch(err => console.error(err.message));
  },

  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        commit('setLoggedIn', true);
        LocalStorage.set('loggedIn', true);
        this.$router.push('/').catch(() => {});
      } else {
        commit('setLoggedIn', false);
        LocalStorage.set('loggedIn', false);
        this.$router.replace('/auth').catch(() => {});
      }
    });
  }
}
