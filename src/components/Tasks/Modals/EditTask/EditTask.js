import { mapActions } from 'vuex'
import AddEditTaskMixin from 'src/mixins/add-edit-task.js'

export default {
  mixins: [AddEditTaskMixin],
  props: ['task', 'id'],

  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  },

  methods: {
    ...mapActions('tasks', ['updateTask']),

    submitForm() {
      let name = this.$refs.modalTaskName.$refs.name;

      name.validate();

      if (!name.hasError) {
        this.submitTask();
      }
    },

    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });

      this.$emit('close');
    }
  }
}
