import { mapActions } from 'vuex';
import ModalHeader from 'components/Tasks/Modals/Shared/ModalHeader.vue'
import ModalTaskName from 'components/Tasks/Modals/Shared/ModalTaskName.vue'
import ModalDueDate from 'components/Tasks/Modals/Shared/ModalDueDate.vue'
import ModalDueTime from 'components/Tasks/Modals/Shared/ModalDueTime.vue'
import ModalButtons from 'components/Tasks/Modals/Shared/ModalButtons.vue'

export default {
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),

    clearDueDate() {
      this.taskToSubmit.dueDate = '';
      this.taskToSubmit.dueTime = '';
    },

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
  },
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
}
