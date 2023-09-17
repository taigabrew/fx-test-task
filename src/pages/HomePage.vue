<template>
  <main
    class="container mx-auto flex grow items-center justify-center px-4 pt-20"
  >
    <div
      class="is-loading pointer-events-none absolute inset-0 z-20 -mt-16 grid transition-cheap duration-300"
      :class="{
        'scale-50 opacity-0': tariffsStore.status !== 'loading',
      }"
    >
      <IconWrap
        v-bind="{ name: 'icon-loader' }"
        class="c-loading-icon m-auto h-12 w-12 text-gray-500 dark:text-white"
      />
    </div>

    <div v-if="tariffsStore.status === 'ok'" class="w-full">
      <PricesWrap />
    </div>
    <ErrorAlert v-else-if="tariffsStore.status === 'error'" />
  </main>
</template>

<script lang="ts" setup>
import PricesWrap from '/@/components/PricesWrap.vue'
import IconWrap from '/@/components/IconWrap.vue'
import ErrorAlert from '/@/components/ErrorAlert.vue'
import { fetchTariffs, tariffsStore } from '/@/stores/tariffs'

fetchTariffs()
</script>
