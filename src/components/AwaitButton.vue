<template>
  <button
    :disabled="disabled || loading || undefined"
    class="c-btn c-await-button true c-btn--black relative flex w-full items-center px-8 py-3 md:py-2"
    :class="{
      'is-loading': loading,
    }"
  >
    <IconWrap
      v-if="icon"
      v-bind="{ name: icon }"
      class="c-await-button__icon absolute left-0 ml-2.5 block h-7 w-7 transition-cheap duration-250 ease-out-quart md:h-5 md:w-5"
    />
    <span
      class="c-await-button__loading-icon-wrap absolute left-0 ml-2.5 block h-7 w-7 md:h-6 md:w-6"
    >
      <IconWrap
        v-bind="{ name: 'icon-loader' }"
        class="c-await-button__loading-icon h-7 w-7 md:h-6 md:w-6"
      />
    </span>

    <span
      class="c-await-button__text block whitespace-nowrap transition-transform duration-325 ease-out-sine"
      :class="{
        'c-await-button__text--has-icon': icon,
      }"
      ><slot
    /></span>
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import IconWrap from './IconWrap.vue'
import type { IconName } from './IconWrap.vue'

withDefaults(
  defineProps<{
    disabled?: boolean
    loading?: boolean
    icon?: IconName | null
  }>(),
  {
    icon: null,
  }
)
</script>
