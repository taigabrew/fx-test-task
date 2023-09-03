<template>
  <div class="flex grow flex-col">
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </div>
</template>

<script lang="ts" setup>
import LayoutFooter from './LayoutFooter.vue'
import LayoutHeader from './LayoutHeader.vue'

import useEvent from '/@/composables/useEvent'

/**
 *
 */
function checkMobileVH() {
  const isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
  const isSm = window.innerWidth < 768

  if (isSm || isIOS) {
    const vh = window.innerHeight * 0.01

    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
}
checkMobileVH()
useEvent(window, 'resize', checkMobileVH)
useEvent(window, 'orientationchange', checkMobileVH)
</script>
