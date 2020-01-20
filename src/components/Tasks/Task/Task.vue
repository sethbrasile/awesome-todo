<template>
  <q-item
    :class="task.completed ? 'bg-green-1' : 'bg-red-1'"
    @click="toggleCompleted"
    v-touch-hold:400.mouse="showEditTaskModal"
    clickable
    v-ripple>

    <q-item-section side top>
      <q-checkbox v-model="isCompleted" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{'text-strikethrough' : task.completed}"
      >
        {{task.name}}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div
          v-if="task.dueDate"
          class="column justify-center"
        >
          <q-icon
            name="event"
            size="18px"
            class="q-mr-xs"
          />
        </div>
        <div class="column">
          <q-item-label
            class="row justify-end"
            caption
          >
            {{task.dueDate | niceDate}}
          </q-item-label>
          <q-item-label
            class="row justify-end"
            caption
          >
            <small>{{task.dueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTaskModal"
          flat
          round
          dense
          color="primary"
          icon="edit" />

        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="negative"
          icon="delete" />
      </div>

      <q-dialog v-model="showEditTask">
        <EditTask
          :task="task"
          :id="id"
          @close="showEditTask = false"
        />
      </q-dialog>
    </q-item-section>
  </q-item>
</template>

<script src="./Task.js" />
