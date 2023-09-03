<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b-2 border-t-8 border-black border-b-gray-200 bg-gray-100 px-4 dark:bg-gray-950 lg:border-b-0"
  >
    <div
      class="container mx-auto flex items-center justify-between px-4 py-2 lg:py-4"
    >
      <div class="flex items-center">
        <FXLogo class="w-24 lg:w-32" />
      </div>

      <div class="flex gap-2">
        <button
          class="c-btn bg-white p-1 dark:bg-gray-900 dark:hover:bg-gray-800"
          @click="toggleTheme"
        >
          <IconWrap
            v-bind="{
              name: appStore.theme === 'dark' ? 'icon-moon' : 'icon-sun',
            }"
            class="h-6 w-6"
          />
        </button>
        <div class="relative">
          <button
            class="c-btn bg-white p-1 dark:bg-gray-900 dark:hover:bg-gray-800"
            @click.stop="isVisibleSettings = !isVisibleSettings"
          >
            <IconWrap v-bind="{ name: 'icon-sliders' }" class="h-6 w-6" />
          </button>

          <SettingsPanel v-bind="{ isOpened: isVisibleSettings }" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import IconWrap from './IconWrap.vue'
import SettingsPanel from './SettingsPanel.vue'

import { toggleTheme, appStore } from '/@/stores/app'
import useEvent from '/@/composables/useEvent'
import FXLogo from './FXLogo.vue'

const isVisibleSettings = ref(false)
useEvent(document, 'click', () => {
  isVisibleSettings.value = false
})
</script>
