<template>
  <q-page class="q-pa-md">
    <q-banner v-if="!has(tasksTodo)" class="bg-grey-3 q-mb-lg">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      You have nothing to do!
      <template v-slot:action>
        <q-btn
          @click="showAddTask = !showAddTask"
          color="primary"
          label="Add task"
        />
      </template>
    </q-banner>

    <TasksList
      v-if="has(tasksTodo)"
      :tasks="tasksTodo"
      headerText="Todo"
      bgColor="bg-negative"
    />

    <TasksList
      v-if="has(tasksCompleted)"
      :tasks="tasksCompleted"
      headerText="Completed"
      bgColor="bg-primary"
    />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex';
  import AddTask from '../components/Tasks/Modals/AddTask.vue';
  import TasksList from '../components/Tasks/TasksList.vue';

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
</script>

<style lang="stylus">
  .text-strikethrough
    text-decoration: line-through;
</style>
