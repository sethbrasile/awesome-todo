import { uid } from 'quasar';
import { firebaseDB, firebaseAuth } from 'boot/firebase';

export default {
  updateTask({ dispatch }, payload) {
    dispatch('fbUpdateTask', payload);
  },

  deleteTask({ dispatch }, id) {
    dispatch('fbDeleteTask', id);
  },

  addTask({ dispatch }, task) {
    let id = uid();
    let payload = { id, task };
    dispatch('fbAddTask', payload);
  },

  setSearch({ commit }, value) {
    commit('setSearch', value);
  },

  setSort({ commit }, value) {
    commit('setSort', value);
  },

  setTasksLoaded({ commit }, value) {
    commit('setTasksLoaded', value);
  },

  fbReadData({ commit }) {
    let uid = firebaseAuth.currentUser.uid;
    let data = firebaseDB.ref(`tasks/${uid}`);

    data.once('value', () => commit('setTasksLoaded', true));

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
  },

  fbAddTask(_, payload) {
    let uid = firebaseAuth.currentUser.uid;
    let taskId = payload.id;
    let ref = firebaseDB.ref(`tasks/${uid}/${taskId}`);

    ref.set(payload.task);
  },

  fbUpdateTask(_, payload) {
    let uid = firebaseAuth.currentUser.uid;
    let taskId = payload.id;
    let ref = firebaseDB.ref(`tasks/${uid}/${taskId}`);

    ref.update(payload.updates);
  },

  fbDeleteTask(_, id) {
    let uid = firebaseAuth.currentUser.uid;
    let ref = firebaseDB.ref(`tasks/${uid}/${id}`);

    ref.remove();
  }
}
