<template>
  <li class="c-pc mb-4 mb-lg-0">
    <section class="border-2 border-dark-subtle rounded-3">
      <header class="px-4 py-3 c-pc__header">
        <h4 class="text-primary-emphasis mb-1">{{ item.name }}</h4>
        <div class="d-flex align-items-baseline">
          <span class="c-pc__price-curr text-dark opacity-75">$</span
          ><span class="c-pc__price-num">{{ item.price }}</span
          >&thinsp;<span class="c-pc__price-period text-dark opacity-75"
            ><span class="opacity-75">/</span>&thinsp;мес.</span
          >
        </div>
      </header>

      <dl class="c-pc__feat px-4 py-2">
        <template
          v-for="field in item.fields"
          :key="`pk-${item.id}-${field.key}`"
        >
          <dt>{{ field.name }}</dt>
          <dd>{{ field.value }}</dd>
        </template>
      </dl>

      <footer class="d-grid p-2">
        <button class="btn btn-light">Выбрать</button>
      </footer>
    </section>
  </li>
</template>

<script lang="ts" setup>
import { TariffItem } from '/@/stores/tariffs'
defineProps<{
  item: TariffItem
}>()
</script>
