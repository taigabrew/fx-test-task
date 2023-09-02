<template>
  <MainLayout>
    <main
      class="c-tariff-wrap d-flex flex-grow-1 align-items-center justify-content-center"
    >
      <div
        class="c-spinner is-loading"
        :class="{
          'c-spinner--hidden': tariffsStore.status !== 'loading',
        }"
      >
        <IconWrap v-bind="{ name: 'icon-loader' }" class="c-loading-icon" />
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

<style>
.c-tariff-wrap {
  padding-top: 5rem;
}
</style>
