import { uid } from 'quasar';
import { firebaseDB, firebaseAuth } from 'boot/firebase';

export default {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },

  deleteTask({ commit }, id) {
    commit('deleteTask', id);
  },

  addTask({ commit }, task) {
    let id = uid();
    let payload = { id, task };
    commit('addTask', payload);
  },

  setSearch({ commit }, value) {
    commit('setSearch', value);
  },

  setSort({ commit }, value) {
    commit('setSort', value);
  },

  fbReadData({ commit }) {
    let uid = firebaseAuth.currentUser.uid;
    let data = firebaseDB.ref(`tasks/${uid}`);

    data.on('child_added', (snapshot) => {
      let task = snapshot.val();
      let id = snapshot.key;
      let payload = { id, task };

      commit('addTask', payload);
    });

    data.on('child_changed', (snapshot) => {
      let updates = snapshot.val();
      let id = snapshot.key;
      let payload = { id, updates };

      commit('updateTask', payload);
    });

    data.on('child_removed', (snapshot) => {
      let id = snapshot.key;
      commit('deleteTask', id);
    });
  }
}
