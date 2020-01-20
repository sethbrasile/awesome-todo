<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <Search />
        <Sort />
      </div>

      <q-scroll-area
        class="q-scroll-area-tasks"
      >
        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut absolute-top"
        >
          <q-banner v-if="!has(tasksTodo) && search" class="bg-grey-3 q-mb-lg">
            <template v-slot:avatar>
              <q-icon name="close" color="negative" />
            </template>
            No Results!
          </q-banner>

          <q-banner v-if="!has(tasksTodo) && !search" class="bg-grey-3 q-mb-lg">
            <template v-slot:avatar>
              <q-icon name="check" color="primary" />
            </template>
            You have nothing to do! Go watch some TV!
            <template v-slot:action>
              <q-btn
                @click="showAddTask = !showAddTask"
                color="primary"
                label="Add task"
              />
            </template>
          </q-banner>
        </transition>

        <TasksList
          v-if="has(tasksTodo)"
          :tasks="tasksTodo"
          headerText="Todo"
          bgColor="bg-negative"
        />

        <div class="relative-position completed-tasks">
          <TasksList
            v-if="has(tasksCompleted)"
            :tasks="tasksCompleted"
            headerText="Completed"
            bgColor="bg-primary"
          />
        </div>
      </q-scroll-area>
    </div>

    <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          @click="showAddTask = true"
          class="all-pointer-events"
          color="primary"
          size="24px"
          icon="add"
          round
        />
      </div>

    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script src="./PageTodo.js" />

<style lang="stylus">
  .text-strikethrough
    text-decoration line-through

  .q-scroll-area-tasks
    display flex
    flex-grow 1
  .completed-tasks
    margin-bottom 6rem
</style>
