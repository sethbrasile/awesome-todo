<template>
  <q-card>
    <ModalHeader>Add Task</ModalHeader>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <ModalTaskName
          :name.sync="taskToSubmit.name"
          ref="modalTaskName" />

        <ModalDueDate
          :dueDate.sync="taskToSubmit.dueDate"
          @clear="clearDueDate"
        />

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
    data() {
      return {
        taskToSubmit: {
          name: '',
          dueDate: '',
          dueTime: '',
          completed: false
        }
      }
    },
    methods: {
      ...mapActions('tasks', ['addTask']),

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
        this.addTask(this.taskToSubmit);
        this.$emit('close');
      }
    },
    components: {
      ModalHeader,
      ModalTaskName,
      ModalDueDate,
      ModalDueTime,
      ModalButtons
    }
  }
</script>
