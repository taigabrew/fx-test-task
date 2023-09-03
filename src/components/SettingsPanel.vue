<template>
  <Transition name="dialog">
    <div v-if="isOpened">
      <section
        class="fixed inset-x-2 bottom-2 z-50 rounded-lg border-2 border-gray-200 bg-white p-4 shadow-2xl md:absolute md:bottom-auto md:left-auto md:right-0 md:top-0 md:mt-12 md:w-72 md:border-0 md:p-6"
        @click.stop
      >
        <NumberEditor
          v-bind="{
            modelValue: appStore.delay,
            id: 'loading-delay',
            label: 'Задержка, мс',
            min: 0,
            disabled: tariffsStore.status === 'loading',
          }"
          @update:model-value="updateDelay"
        />

        <ToggleEditor
          v-bind="{
            id: 'is-error-resp',
            disabled: tariffsStore.status === 'loading',
            label: 'Эмуляция ошибки',
            modelValue: appStore.isErrorResp,
          }"
          @update:model-value="updateIsError"
        />

        <AwaitButton
          v-bind="{
            loading: tariffsStore.status === 'loading',
            icon: 'icon-refresh',
          }"
          class="mt-6"
          @click="fetchTariffs"
        >
          Получить тарифы
        </AwaitButton>
      </section>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import AwaitButton from './AwaitButton.vue'
import NumberEditor from './NumberEditor.vue'
import ToggleEditor from './ToggleEditor.vue'

import { appStore } from '/@/stores/app'
import { fetchTariffs, tariffsStore } from '/@/stores/tariffs'

defineProps<{ isOpened: boolean }>()

function updateDelay(val: string | number) {
  if (tariffsStore.status === 'loading') return
  appStore.delay = Number(val)
}

function updateIsError(val: boolean) {
  if (tariffsStore.status === 'loading') return
  appStore.isErrorResp = val
}
</script>
