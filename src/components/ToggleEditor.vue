<template>
  <InputWrap
    v-bind="{
      id,
      label,
      labelClasses: !disabled ? 'cursor-pointer whitespace-nowrap' : undefined,
      wrapperClasses: 'items-center',
      isInline: true,
    }"
    class="flex items-center justify-between"
  >
    <input
      :id="id"
      ref="checkbox"
      type="checkbox"
      :name="id"
      :disabled="disabled || undefined"
      :checked="modelValue"
      tabindex="-1"
      class="c-switch-input pointer-events-none absolute opacity-0"
      @change="change"
    />
    <button
      class="c-switch focus-outline relative ml-3 shrink-0 rounded-full transition duration-250 ease-out-quart"
      :class="{ 'pointer-events-none opacity-50': disabled }"
      @click="update"
    >
      <span
        class="c-switch__indicator dark:from-abyss-50 absolute left-0 block rounded-full border-2 border-white bg-white bg-gradient-to-b from-gray-200 shadow transition-cheap duration-250 ease-out-quart dark:shadow-md"
      />
    </button>
  </InputWrap>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import InputWrap from './InputWrap.vue'

const props = withDefaults(
  defineProps<{
    id: string
    label?: string
    disabled?: boolean
    modelValue?: boolean
  }>(),
  {
    modelValue: false,
  }
)

const emit = defineEmits<{ (e: 'update:modelValue', val: boolean): void }>()

const checkbox = ref<InstanceType<typeof HTMLInputElement>>()

function update() {
  if (!checkbox.value) return
  checkbox.value.dispatchEvent(new Event('change'))
}

function change() {
  emit('update:modelValue', !props.modelValue)
}
</script>
