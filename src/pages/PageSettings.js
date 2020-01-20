import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('settings', ['settings']),

    twelveHourTime: {
      get() {
        return this.settings.twelveHourTime;
      },
      set(value) {
        this.setTwelveHourTime(value);
      }
    }
  },

  methods: {
    ...mapActions('settings', ['setTwelveHourTime'])
  }
}
