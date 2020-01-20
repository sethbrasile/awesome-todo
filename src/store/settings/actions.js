import { LocalStorage } from 'quasar';

export default {
  setTwelveHourTime({ commit, dispatch }, value) {
    commit('setTwelveHourTime', value);
    dispatch('saveSettings');
  },

  setTasksOneList({ commit, dispatch }, value) {
    commit('setTasksOneList', value);
    dispatch('saveSettings');
  },

  saveSettings({ state }) {
    LocalStorage.set('settings', state.settings);
  },

  getSettings({ commit }) {
    let settings = LocalStorage.getItem('settings')

    if (settings) {
      commit('setSettings', settings);
    }
  }
}
