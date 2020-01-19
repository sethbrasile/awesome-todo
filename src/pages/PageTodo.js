import { mapGetters, mapState } from 'vuex';
import AddTask from 'components/Tasks/Modals/AddTask/AddTask.vue';
import TasksList from 'components/Tasks/TasksList/TasksList.vue';
import Search from 'components/Tasks/Tools/Search/Search.vue';

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  methods: {
    has(obj) {
      return Object.keys(obj).length;
    }
  },
  components: {
    AddTask,
    TasksList,
    Search
  }
}
