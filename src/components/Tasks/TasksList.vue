<template>
  <div class="q-mb-lg">
    <q-banner
      :class="bgColor"
      class="text-white text-center"
    >
      <span class="text-bold text-subtitle1">{{headerText}}</span>
    </q-banner>
    <q-list
      separator
      bordered
    >
      <Task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </div>
</template>

<script>
  import Task from './Task.vue';
  export default {
    props: ['tasks', 'headerText', 'bgColor'],

    components: {
      Task
    }
  }
</script>
