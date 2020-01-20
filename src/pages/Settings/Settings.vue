<template>
  <q-page padding>
    <q-list
      class="q-mb-md"
      bordered
      padding
    >
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            color="blue"
            v-model="twelveHourTime"
            val="battery"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Display tasks as single list</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle
            color="blue"
            v-model="tasksOneList"
            val="battery"
          />
        </q-item-section>
      </q-item>
    </q-list>

<q-list bordered padding>
      <q-item-label header>More</q-item-label>

      <q-item
        to="/settings/help"
        tag="label"
        v-ripple
      >
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="visitOurWebsite"
        tag="label"
        v-ripple
      >
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="emailUs"
        tag="label"
        v-ripple
      >
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script src="./Settings.js" />
