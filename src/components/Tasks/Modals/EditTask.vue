<template>
  <q-card>
    <ModalHeader>Edit Task</ModalHeader>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <ModalTaskName
          :name.sync="taskToSubmit.name"
          ref="modalTaskName" />

        <ModalDueDate
          :dueDate.sync="taskToSubmit.dueDate"
          @clear="clearDueDate" />

        <ModalDueTime
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
          :dueDate="taskToSubmit.dueDate" />
      </q-card-section>

      <ModalButtons />
    </form>
  </q-card>
</template>

<script>
  import { mapActions } from 'vuex';
  import ModalHeader from './Shared/ModalHeader.vue'
  import ModalTaskName from './Shared/ModalTaskName.vue'
  import ModalDueDate from './Shared/ModalDueDate.vue'
  import ModalDueTime from './Shared/ModalDueTime.vue'
  import ModalButtons from './Shared/ModalButtons.vue'

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
</script>
