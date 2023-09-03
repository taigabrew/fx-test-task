<template>
  <h2 class="c-pw-title text-dark-emphasis text-center text-lg-start">
    Тарифы VPS
  </h2>
  <ul class="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
    <PriceCard
      v-for="item in list"
      :key="`pk-${item.id}`"
      v-bind="{ item }"
      class="col"
    />
  </ul>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { tariffsStore, TariffItem } from '/@/stores/tariffs'

import PriceCard from './PriceCard.vue'

const list = computed(() => {
  const _l: TariffItem[] = []

  if (!tariffsStore.data) return _l

  const { results, fields } = tariffsStore.data

  for (const item of results) {
    const _item = {
      id: item.pk,
      name: item.name,
      price: item.price,
      fields: [],
    } as TariffItem

    for (const field of fields) {
      const [key, name] = field
      _item.fields.push({
        key,
        name,
        value: item[key],
      })
    }

    _l.push(_item)
  }

  return _l
})
</script>
