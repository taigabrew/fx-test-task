<template>
  <MainLayout>
    <main class="flex grow items-center justify-center pt-20">
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

      <div v-if="tariffsStore.status === 'ok'">
        <PricesWrap />
      </div>
      <ErrorAlert v-else-if="tariffsStore.status === 'error'" />
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '/@/components/MainLayout.vue'
import PricesWrap from '/@/components/PricesWrap.vue'
import IconWrap from '/@/components/IconWrap.vue'
import ErrorAlert from '/@/components/ErrorAlert.vue'

import { fetchTariffs, tariffsStore } from '/@/stores/tariffs'

fetchTariffs()
</script>
