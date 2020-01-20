import { mapActions, mapState } from 'vuex';
import { date } from 'quasar';
import EditTask from 'components/Tasks/Modals/EditTask/EditTask.vue'

const { formatDate } = date;

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
    },
    showEditTaskModal() {
      this.showEditTask = true;
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    ...mapState('settings', ['settings']),

    isCompleted: {
      get() {
        return this.task.completed;
      },
      set() {
        this.toggleCompleted();
      }
    },

    dueTime() {
      let { dueDate, dueTime } = this.task;

      if (this.settings.twelveHourTime) {
        return formatDate(`${dueDate} ${dueTime}`, 'h:mm a')
      }

      return dueTime;
    }
  },
  filters: {
    niceDate(value) {
      return formatDate(value, 'MMM D');
    },
    searchHighlight(value, search) {
      if (search) {
        let regex = new RegExp(search, 'ig');
        return value.replace(regex, (match) => {
          return `<span class="bg-yellow-6">${match}</span>`;
        });
      }

      return value;
    }
  },
  components: {
    EditTask
  }
}
