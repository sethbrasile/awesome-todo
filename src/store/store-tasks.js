import Vue from 'vue'
import { uid } from 'quasar';

const state = {
  tasks: {
    'ID1': {
      name: 'Go to shop',
      completed: false,
      dueDate: '04/04/2020',
      dueTime: '18:00'
    },
    'ID2': {
      name: 'Eat a banana',
      completed: false,
      dueDate: '04/06/2020',
      dueTime: '16:00'
    },
    'ID3': {
      name: 'Eat a fart',
      completed: true,
      dueDate: '04/04/2020',
      dueTime: '12:30'
    }
  }
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  }
}

const actions = {
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
  }
}

const getters = {
  tasksTodo(state) {
    let tasks = {};

    Object.keys(state.tasks).map((key) => {
      let task = state.tasks[key];

      if (!task.completed) {
        tasks[key] = task;
      }
    });

    return tasks;
  },

  tasksCompleted(state) {
    let tasks = {};

    Object.keys(state.tasks).map((key) => {
      let task = state.tasks[key];

      if (task.completed) {
        tasks[key] = task;
      }
    });

    return tasks;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
