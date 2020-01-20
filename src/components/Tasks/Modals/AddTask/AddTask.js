import { mapActions } from 'vuex';
import AddEditTaskMixin from 'src/mixins/add-edit-task.js'

export default {
  mixins: [AddEditTaskMixin],
  methods: {
    ...mapActions('tasks', ['addTask']),

    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit('close');
    }
  }
}
