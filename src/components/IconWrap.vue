<template>
  <svg
    :class="{ 'outline-icon-stroke-width': !width }"
    focusable="false"
    aria-hidden="true"
    fill="none"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    :stroke-width="typeof width === 'number' ? width : undefined"
  >
    <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="`#${name}`" />
  </svg>
</template>

<script lang="ts" setup>
import iconsListStr from '/@/assets/images/icons.svg?raw'

const iconsFragment = document
  .createRange()
  .createContextualFragment(iconsListStr)
const iconsEl = document.getElementById('icons-lib')
const iconsWrapper = document.getElementById('icons')

if (!iconsEl && iconsWrapper) iconsWrapper.appendChild(iconsFragment)

type IconName = 'icon-sliders' | 'icon-refresh' | 'icon-loader'

defineProps<{
  name: IconName
  width?: number
}>()
</script>

<style lang="postcss">
.outline-icon-stroke-width {
  stroke-width: 1.25;

  .dark & {
    stroke-width: 1;
  }
}
</style>
