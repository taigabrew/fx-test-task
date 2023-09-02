<template>
  <header class="c-header fixed-top bg-white">
    <div
      class="container d-flex py-2 py-lg-4 justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
        <img src="/logo.svg" class="c-logo" />
      </div>

      <div class="position-relative">
        <button
          class="btn btn-light px-1"
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
