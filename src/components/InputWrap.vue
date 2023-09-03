<template>
  <div
    class="c-input-wrap flex"
    :class="{ 'max-w-sm': !isAutoWidth, 'flex-col': !isInline }"
  >
    <div :class="{ 'order-2': isEditorFirst }">
      <label
        v-if="label"
        :for="id"
        class="c-input__label block leading-tight"
        :class="[{ 'mb-1': !isInline }, labelClasses]"
        >{{ label }}
      </label>
    </div>
    <div
      class="relative"
      :class="[{ grow: isInline && isAutoWidth }, wrapperClasses]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    id: string
    label?: string
    isInline?: boolean
    isEditorFirst?: boolean
    isAutoWidth?: boolean
    wrapperClasses?: string
    labelClasses?: string
  }>(),
  {
    wrapperClasses: '',
    labelClasses: '',
  }
)
</script>
