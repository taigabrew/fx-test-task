<template>
  <li class="md:min-w-64">
    <section class="">
      <header class="px-4 py-3">
        <h4 class="mb-1">{{ item.name }}</h4>
        <div class="flex items-baseline">
          <span class="">$</span><span class="">{{ item.price }}</span
          >&thinsp;<span class=""><span class="">/</span>&thinsp;мес.</span>
        </div>
      </header>

      <dl class="px-4 py-2">
        <template
          v-for="field in item.fields"
          :key="`pk-${item.id}-${field.key}`"
        >
          <dt>{{ field.name }}</dt>
          <dd>{{ field.value }}</dd>
        </template>
      </dl>

      <footer class="p-2">
        <button class="c-btn bg-gray-50">Выбрать</button>
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
