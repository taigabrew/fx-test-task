<template>
  <InputWrap v-bind="{ id, label }">
    <input
      :id="id"
      :name="id"
      type="number"
      inputmode="numeric"
      :value="modelValue"
      :disabled="disabled || undefined"
      :min="typeof min === 'number' ? min : undefined"
      class="c-input appearance-none"
      :class="{ 'c-input--readonly': disabled }"
      @input="update"
      @keyup.stop
    />
  </InputWrap>
</template>

<script lang="ts" setup>
import { watch, useAttrs } from 'vue'
import InputWrap from './InputWrap.vue'

const props = withDefaults(
  defineProps<{
    id: string
    label?: string
    disabled?: boolean
    min?: number
    modelValue?: string | number
  }>(),
  {
    modelValue: 0,
    disabled: false,
  }
)
const emit = defineEmits<{
  (e: 'update:modelValue', val: number | string): void
}>()

function update(event: Event) {
  const target = event.target as HTMLInputElement
  const val = (
    typeof props.modelValue === 'number' ? Number(target.value) : target.value
  ) as string | number

  emit('update:modelValue', val)
}

watch(
  () => props.modelValue,
  val => {
    if (typeof props.min === 'number' && Number(val) < props.min)
      emit('update:modelValue', props.min)
  }
)
</script>
