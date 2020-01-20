export default {
  setTwelveHourTime(state, value) {
    state.settings.twelveHourTime = value;
  },

  setTasksOneList(state, value) {
    state.settings.tasksOneList = value;
  },

  setSettings(state, settings) {
    Object.assign(state.settings, settings);
  }
}
