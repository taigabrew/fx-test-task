<template>
  <Transition name="dialog">
    <div v-if="isOpened">
      <section
        class="bg-white p-3 rounded-md shadow-2xl z-50 fixed inset-x-2 bottom-2 md:right-0 md:top-0 md:left-auto md:bottom-auto md:mt-12 md:absolute md:min-w-56"
        @click.stop
      >
        <div class="mb-3">
          <label for="loading-delay">Задержка, мс</label>
          <input
            :value="appStore.delay"
            type="number"
            name="loading-delay"
            id="loading-delay"
            min="0"
            :disabled="tariffsStore.status === 'loading'"
            class="form-control"
            @input="updateDelay"
          />
        </div>

        <div>
          <input
            type="checkbox"
            name="is-error-resp"
            :disabled="tariffsStore.status === 'loading'"
            :checked="appStore.isErrorResp"
            id="is-error-resp"
            @change="updateIsError"
          />
          <label for="is-error-resp"> Эмуляция ошибки </label>
        </div>

        <footer class="mt-4">
          <button
            :disabled="tariffsStore.status === 'loading'"
            class="c-btn flex c-await-button c-btn--black items-center"
            :class="{
              'is-loading': tariffsStore.status === 'loading',
            }"
            @click="fetchTariffs"
          >
            <span
              class="c-await-button__loading-icon-wrap absolute left-0 block ml-2 w-6 h-6"
            >
              <IconWrap
                v-bind="{ name: 'icon-loader' }"
                class="c-await-button__loading-icon w-6 h-6"
              />
            </span>
            <span class="c-await-button__text">Получить тарифы</span>
          </button>
        </footer>
      </section>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import IconWrap from './IconWrap.vue'

import { appStore } from '/@/stores/app'
import { fetchTariffs, tariffsStore } from '/@/stores/tariffs'

defineProps<{ isOpened: boolean }>()

function updateDelay(event: Event) {
  if (tariffsStore.status === 'loading') return

  const target = event.target as HTMLInputElement
  appStore.delay = Number(target.value)
}

function updateIsError(event: Event) {
  if (tariffsStore.status === 'loading') return

  const target = event.target as HTMLInputElement
  appStore.isErrorResp = target.checked
}
</script>
