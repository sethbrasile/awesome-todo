<template>
  <q-page padding>
    <q-card class="auth-tabs">
      <q-tabs
        v-model="tab"
        dense
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="login" />
        <q-tab name="register" label="register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <AuthForm :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <AuthForm :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>

    </q-card>
  </q-page>
</template>

<script src="./Auth.js" />

<style lang="stylus">
  .auth-tabs
    max-width 500px
    margin 0 auto
    margin-top 2em
</style>
