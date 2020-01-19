import { mapGetters } from 'vuex';
import AddTask from 'components/Tasks/Modals/AddTask/AddTask.vue';
import TasksList from 'components/Tasks/TasksList/TasksList.vue';

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  methods: {
    has(obj) {
      return Object.keys(obj).length
    }
  },
  components: {
    AddTask,
    TasksList
  }
}
