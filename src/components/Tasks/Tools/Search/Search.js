import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('tasks', ['search']),

    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        this.setSearch(value);
      }
    }
  },

  methods: {
    ...mapActions('tasks', ['setSearch'])
  }
}
