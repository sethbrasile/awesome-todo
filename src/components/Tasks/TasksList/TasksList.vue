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

<script src="./TaskList.js">
