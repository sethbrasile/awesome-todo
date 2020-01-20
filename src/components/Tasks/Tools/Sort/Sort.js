import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      options: [
        {
          label: 'Name',
          value: 'name'
        },
        {
          label: 'Date',
          value: 'dueDate'
        }
      ]
    }
  },

  computed: {
    ...mapState('tasks', ['sort']),

    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.setSort(value);
      }
    }
  },

  methods: {
    ...mapActions('tasks', ['setSort'])
  }
}
