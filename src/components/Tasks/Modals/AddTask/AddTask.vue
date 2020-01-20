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

<script src="./AddTask.js" />
