<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div :class="{ 'q-mb-lg' : !settings.tasksOneList }">
      <q-banner
        v-if="!settings.tasksOneList"
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
  </transition>
</template>

<script src="./TaskList.js" />
