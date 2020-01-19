<template>
  <q-card-section class="row">
    <div class="text-h6">
      <slot />
    </div>

    <q-space />

    <q-btn
      v-close-popup
      dense
      flat
      round
      icon="close"
    />
  </q-card-section>
</template>
