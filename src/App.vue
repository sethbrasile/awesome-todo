<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    mounted() {
      this.getSettings();
    },

    methods: {
      ...mapActions('settings', ['getSettings'])
    }
  }
</script>
