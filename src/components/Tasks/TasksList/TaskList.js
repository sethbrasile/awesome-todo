import { mapState } from 'vuex';
import Task from 'components/Tasks/Task/Task.vue';

export default {
  props: ['tasks', 'headerText', 'bgColor'],

  computed: {
    ...mapState('settings', ['settings'])
  },

  components: {
    Task
  }
}
