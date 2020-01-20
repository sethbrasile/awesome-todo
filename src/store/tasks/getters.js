function getaThing(state, prop) {
  return state.tasks[prop][state.sort].toLowerCase();
}

export default {
  tasksSorted(state) {
    let tasks = {};

    let keysOrdered = Object.keys(state.tasks).sort((a, b) => {
      let aProp = getaThing(state, a);
      let bProp = getaThing(state, b);

      if (aProp > bProp) return 1
      else if (aProp < bProp) return -1
      else return 0
    });

    keysOrdered.map((key) => tasks[key] = state.tasks[key]);

    return tasks;
  },

  tasksFiltered(state, getters) {
    let tasks = {};
    let tasksSorted = getters.tasksSorted;
    let search = state.search;

    if (search) {
      Object.keys(tasksSorted).map((key) => {
        let task = tasksSorted[key];
        let name = task.name.toLowerCase();

        if (name.includes(search)) {
          tasks[key] = task;
        }
      });

      return tasks;
    }

    return tasksSorted;
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
