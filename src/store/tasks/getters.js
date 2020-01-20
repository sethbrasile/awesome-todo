export default {
  tasksFiltered(state) {
    let tasks = {};
    let search = state.search;

    if (search) {
      Object.keys(state.tasks).map((key) => {
        let task = state.tasks[key];
        let name = task.name.toLowerCase();

        if (name.includes(search)) {
          tasks[key] = task;
        }
      });

      return tasks;
    }

    return state.tasks;
  },

  tasksTodo(state, getters) {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};

    Object.keys(tasksFiltered).map((key) => {
      let task = tasksFiltered[key];

      if (!task.completed) {
        tasks[key] = task;
      }
    });

    return tasks;
  },

  tasksCompleted(state, getters) {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};

    Object.keys(tasksFiltered).map((key) => {
      let task = tasksFiltered[key];

      if (task.completed) {
        tasks[key] = task;
      }
    });

    return tasks;
  }
}
