<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <q-btn
          to="/auth"
          icon-right="account_circle"
          label="login"
          class="absolute-right"
          flat
        />
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.url"
          :to="nav.url"
          :icon="nav.icon"
          :label="nav.label"
          exact
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>
        <q-item
          v-for="nav in navs"
          :to="nav.url"
          :key="nav.url"
          class="text-grey-5"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    name: 'Layout',

    data () {
      return {
        navs: [
          {
            label: 'Todos',
            icon: 'list',
            url: '/'
          },
          {
            label: 'Settings',
            icon: 'settings',
            url: '/settings'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @media screen and (min-width: 768px)
    .q-footer
      display: none;

  .q-drawer
    .q-router-link--exact-active
      color: white !important;
</style>
