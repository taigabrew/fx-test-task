<template>
  <header
    class="fixed top-0 inset-x-0 bg-white border-t-8 border-black border-b-2 border-b-gray-200 lg:border-b-0 px-4"
  >
    <div
      class="mx-auto container flex py-2 lg:py-4 justify-between items-center"
    >
      <div class="flex items-center">
        <img src="/logo.svg" class="w-24 lg:w-40" />
      </div>

      <div class="relative">
        <button
          class="c-btn bg-gray-50 p-1"
          @click.stop="isVisibleSettings = !isVisibleSettings"
        >
          <IconWrap v-bind="{ name: 'icon-sliders' }" class="w-6 h-6" />
        </button>

        <SettingsPanel v-bind="{ isOpened: isVisibleSettings }" />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import IconWrap from './IconWrap.vue'
import SettingsPanel from './SettingsPanel.vue'

import useEvent from '/@/composables/useEvent'

const isVisibleSettings = ref(false)
useEvent(document, 'click', () => {
  isVisibleSettings.value = false
})
</script>
