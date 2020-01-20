<template>
  <q-select
    v-model="sortBy"
    :options="options"
    class="col q-ml-sm"
    label="Sort by"
    emit-value
    map-options
    filled
    stack-label
  />
</template>

<script src="./Sort.js" />

<style lang="stylus" scoped>
  .q-select
    flex: 0 0 112px;
</style>
