<template>
  <Transition name="dialog">
    <div v-if="isOpened">
      <section
        class="c-settings-pan bg-white p-3 rounded-2 shadow-lg"
        @click.stop
      >
        <div class="mb-3">
          <label for="loading-delay" class="form-label">Задержка, мс</label>
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

        <div class="form-check">
          <input
            type="checkbox"
            name="is-error-resp"
            :disabled="tariffsStore.status === 'loading'"
            :checked="appStore.isErrorResp"
            id="is-error-resp"
            class="form-check-input"
            @change="updateIsError"
          />
          <label class="form-check-label" for="is-error-resp">
            Эмуляция ошибки
          </label>
        </div>

        <footer class="mt-4">
          <button
            :disabled="tariffsStore.status === 'loading'"
            class="btn btn-dark d-flex c-await-button"
            :class="{
              'is-loading': tariffsStore.status === 'loading',
            }"
            @click="fetchTariffs"
          >
            <span
              class="c-await-button__loading-icon-wrap position-absolute start-0 d-block ms-2 w-6 h-6"
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
