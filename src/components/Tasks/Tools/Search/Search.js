import { mapState, mapActions } from 'vuex';
import selectAll from 'src/directives/select-all.js'

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
  },

  directives: {
    selectAll
  }
}
