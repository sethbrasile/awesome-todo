<template>
  <q-input
    v-model="searchField"
    label="Search"
    class="col"
    outlined
  >
    <template v-slot:append>
      <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script src="./Search.js">
