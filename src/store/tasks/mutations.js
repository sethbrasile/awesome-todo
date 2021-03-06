import Vue from 'vue';

export default {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },

  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },

  clearTasks(state) {
    state.tasks = {};
  },

  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  },

  setSearch(state, value) {
    state.search = value.toLowerCase();
  },

  setSort(state, value) {
    state.sort = value;
  },

  setTasksLoaded(state, value) {
    state.tasksLoaded = value;
  }
}
