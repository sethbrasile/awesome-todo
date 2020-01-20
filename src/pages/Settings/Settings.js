import { mapState, mapActions } from 'vuex';
import { openURL } from 'quasar';

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
    },

    tasksOneList: {
      get() {
        return this.settings.tasksOneList;
      },
      set(value) {
        this.setTasksOneList(value);
      }
    }
  },

  methods: {
    ...mapActions('settings', ['setTwelveHourTime', 'setTasksOneList']),

    visitOurWebsite() {
      openURL('http://www.yahoo.com');
    },

    emailUs() {
      window.location.href = 'mailto:hello@awesometodo.com?subject=Awesome Todo Feedback';
    }
  }
}
