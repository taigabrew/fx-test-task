<template>
  <h2
    class="mb-4 mt-6 font-semibold uppercase leading-none tracking-wide lg:-mt-10"
  >
    Тарифы VPS
  </h2>
  <ul
    v-if="tariffsStore.data?.results"
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
  >
    <PriceCard
      v-for="item in tariffsStore.data?.results"
      :key="`pk-${item.pk}`"
      v-bind="{ item }"
    />
  </ul>
</template>

<script lang="ts" setup>
import { tariffsStore } from '/@/stores/tariffs'

import PriceCard from './PriceCard.vue'
</script>
