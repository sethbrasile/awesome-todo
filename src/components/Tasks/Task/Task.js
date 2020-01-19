import { mapActions } from 'vuex';
import EditTask from 'components/Tasks/Modals/EditTask/EditTask.vue'

export default {
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to delete "${this.task.name}?"`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id);
      })
    },
    toggleCompleted() {
      this.updateTask({ id: this.id, updates: { completed: !this.task.completed } })
    }
  },
  computed: {
    isCompleted: {
      get() {
        return this.task.completed;
      },
      set() {
        this.toggleCompleted();
      }
    }
  },
  components: {
    EditTask
  }
}
