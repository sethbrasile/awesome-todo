<template>
  <q-item
    :class="task.completed ? 'bg-green-1' : 'bg-red-1'"
    @click="toggleCompleted"
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
            {{task.dueDate}}
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
          @click.stop="showEditTask = true"
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

<script>
import { mapActions } from 'vuex';
import EditTask from './Modals/EditTask.vue'

export default {
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to delete "${this.task.name}?"`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id);
      })
    },
    toggleCompleted() {
      this.updateTask({ id: this.id, updates: { completed: !this.task.completed } })
    }
  },
  computed: {
    isCompleted: {
      get() {
        return this.task.completed;
      },
      set() {
        this.toggleCompleted();
      }
    }
  },
  components: {
    EditTask
  }
}
</script>

<style lang="stylus">

</style>
