<template>
  <main
    class="container mx-auto flex grow flex-col items-center overflow-x-hidden pt-20 sm:px-4 sm:pb-32 sm:pt-32"
  >
    <section class="max-w-3xl lg:max-w-4xl">
      <form
        v-if="formType === 'stand-alone'"
        class="flex flex-col gap-4 rounded-3xl bg-white p-4 sm:min-w-sm md:min-w-lg md:flex-row"
      >
        <div class="pb-8 pl-4 pr-8 pt-8 md:p-10 lg:p-12">
          <h4 class="-mt-4 mb-8 text-base font-bold md:text-xl">
            Гибкая VPS конфигурация
          </h4>
          <!-- <h4 class="-mt-4 mb-8 text-xl font-bold">Custom VPS configuration</h4> -->
          <!-- <h4 class="mb-0.5 text-xl font-bold">Custom VPS configuration</h4> -->
          <!-- <p class="mb-8 max-w-sm text-gray-500">
            One/two sentences about how you can customize your VPS. Or we can
            discard of this paragraph
          </p> -->
          <div data-name="sliders-wrap">
            <div
              class="mb-6 grid grid-cols-7 items-end gap-6 md:gap-4 lg:gap-6"
            >
              <div class="col-span-5">
                <label
                  for="custom-vps-cores-count"
                  class="mb-2 block text-gray-500"
                  >Процессор</label
                >
                <!-- >CPU</label -->
                <input
                  id="custom-vps-cores-count"
                  v-model.number="cores"
                  type="range"
                  min="1"
                  max="32"
                  class="c-input-range"
                />
              </div>

              <input
                v-model.number="cores"
                type="number"
                min="1"
                max="32"
                class="col-span-2 appearance-none rounded text-right text-2xl font-bold transition-colors focus:bg-gray-100 focus:outline-none"
              />
            </div>
            <div class="mb-6 grid grid-cols-7 items-end gap-4">
              <div class="col-span-5">
                <label
                  for="custom-vps-cores-count"
                  class="mb-2 block text-gray-500"
                  >Память</label
                >
                <!-- >Mermory</label -->
                <input
                  id="custom-vps-memory-count"
                  v-model.number="memory"
                  type="range"
                  min="2"
                  max="64"
                  class="c-input-range"
                />
              </div>
              <div
                class="relative col-span-2 flex items-baseline justify-end gap-0.5"
              >
                <input
                  v-model.number="memory"
                  min="2"
                  max="64"
                  type="number"
                  class="w-full appearance-none rounded text-right text-2xl font-bold transition-colors focus:bg-gray-100 focus:outline-none"
                /><span
                  class="absolute bottom-1 left-full mb-1 ml-0.5 text-lg leading-4 text-gray-500"
                  >ГБ</span
                >
              </div>
            </div>

            <div class="item-end grid grid-cols-7 gap-4">
              <div class="col-span-5">
                <label
                  for="custom-vps-cores-count"
                  class="mb-2 block text-gray-500"
                  >NVMe диск</label
                >
                <!-- >NVMe Drive</label -->
                <!-- <ul class="mb-6 mt-2 flex items-center">
                  <li
                    v-for="(item, index) in [
                      { id: 'ssd', name: 'SSD' },
                      { id: 'nvme', name: 'NVMe' },
                    ]"
                    :key="`${item.id}-drive-type`"
                    class="shrink-0"
                  >
                    <label
                      :for="`drive-type-item-${item.id}`"
                      class="block cursor-pointer border px-4 py-2"
                      :class="{
                        'border-emerald-400 bg-emerald-100 text-emerald-700':
                          driveType === item.id,
                        'bg-gray-50 text-gray-500': driveType !== item.id,
                        'rounded-l-lg': index === 0,
                        'rounded-r-lg': index === 1,
                      }"
                    >
                      <input
                        :id="`drive-type-item-${item.id}`"
                        :value="item.id"
                        name="custom-vps-drive-type"
                        :checked="driveType === item.id"
                        type="radio"
                        class="absolute opacity-0"
                        @change="driveType = item.id"
                      />
                      {{ item.name }}
                    </label>
                  </li>
                </ul> -->

                <input
                  id="custom-vps-drive-count"
                  v-model.number="drive"
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  class="c-input-range"
                />
              </div>
              <div class="relative col-span-2 flex items-end justify-end gap-1">
                <input
                  v-model.number="drive"
                  min="20"
                  max="1000"
                  step="10"
                  type="number"
                  class="w-full appearance-none rounded text-right text-2xl font-bold transition-colors focus:bg-gray-100 focus:outline-none"
                /><span
                  class="absolute bottom-1 left-full mb-1 ml-0.5 text-lg leading-4 text-gray-500"
                  >ГБ</span
                >
              </div>
            </div>
          </div>
        </div>
        <div
          data-name="card"
          class="relative flex flex-col items-center justify-center rounded-2xl border-2 border-emerald-400 p-8 md:min-w-80 lg:min-w-96"
        >
          <span
            class="absolute top-12 inline-block select-none justify-self-start rounded-full border border-emerald-500 bg-emerald-50 px-4 text-sm text-emerald-500"
            >выбрано</span
          >
          <div
            v-if="appStore.hasDiscount"
            class="relative -ml-5 text-gray-500"
            :class="{ 'mt-24': appStore.hasDiscount }"
          >
            <span class="absolute inset-0 top-2.5 -rotate-6">
              <figure
                class="absolute -inset-x-2 h-1 rounded-full bg-red-400 bg-opacity-50"
              />
              <span
                class="text-opacity-8 absolute left-full top-px ml-3 flex h-16 w-16 -translate-y-1/2 transform items-center rounded-full bg-gradient-to-tr from-red-50 to-white pl-1.5 text-lg font-medium text-red-400"
                >-10%</span
              >
            </span>
            <span>{{ customPrice[0] }}</span>
            <span v-if="customPrice[1]">.{{ customPrice[1] }}</span>
            €/мес
          </div>
          <div
            class="relative flex items-baseline text-gray-700"
            :class="{
              'mb-10 mt-24': !appStore.hasDiscount,
              'mb-8 mt-2': appStore.hasDiscount,
            }"
          >
            <span
              class="text-5xl font-extrabold leading-none tracking-tight lg:text-6xl"
              >{{ priceWithDiscount[0] }}</span
            >
            <span
              v-if="priceWithDiscount[1]"
              class="text-4xl font-bold leading-none tracking-tight lg:text-5xl"
              >.{{ priceWithDiscount[1] }}</span
            >
            <span class="ml-2 leading-none"
              ><span class="text-4xl font-semibold text-gray-600 lg:text-5xl"
                >€</span
              ><span class="text-gray-400">/</span
              ><span class="text-gray-600">мес</span></span
            >
          </div>
          <button
            type="submit"
            class="c-btn w-full border-0 bg-emerald-400 py-2.5 text-lg uppercase tracking-wider text-white hover:bg-emerald-600"
            @click.prevent="submit"
          >
            Выбрать
            <!-- Select -->
          </button>
          <p class="mt-4 text-xs italic text-gray-500">
            Вы можете изменить параметры позже
            <!-- You can change your parameters later -->
          </p>
        </div>
      </form>
    </section>

    <section
      class="mt-6 rounded-3xl bg-white px-8 py-10 sm:min-w-sm md:min-w-2xl md:max-w-4xl lg:mt-12 lg:px-16 lg:py-12"
    >
      <header
        class="-mb-4 -mt-4 text-sm font-semibold text-gray-500 md:mb-6 md:text-center"
      >
        Готовые конфигурации
      </header>
      <ul v-if="tariffsStore.data?.results" class="lg:mt-8">
        <li
          class="hidden grid-cols-7 items-center rounded border-gray-100 bg-gray-50 py-3 last:border-0 md:grid"
        >
          <div class="col-span-2"></div>
          <div
            class="col-span-4 grid grid-cols-4 gap-6 pr-12 text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            <div class="flex justify-end">
              <button
                class="relative block text-right"
                @click="toggleSort('cores')"
              >
                <IconWrap
                  v-if="sortDirection && sortField === 'cores'"
                  v-bind="{
                    name:
                      sortDirection === 'asc'
                        ? 'icon-arrow-up'
                        : 'icon-arrow-down',
                  }"
                  class="absolute right-full top-1/2 h-4 w-4 -translate-x-1 -translate-y-1/2 text-gray-400"
                />Процессор
              </button>
            </div>
            <div class="flex justify-end" @click="toggleSort('memory')">
              <button class="relative block text-right">
                <IconWrap
                  v-if="sortDirection && sortField === 'memory'"
                  v-bind="{
                    name:
                      sortDirection === 'asc'
                        ? 'icon-arrow-up'
                        : 'icon-arrow-down',
                  }"
                  class="absolute right-full top-1/2 h-4 w-4 -translate-x-1 -translate-y-1/2 text-gray-400"
                />Память
              </button>
            </div>
            <div class="flex justify-end" @click="toggleSort('hdd_space')">
              <button class="relative block text-right">
                <IconWrap
                  v-if="sortDirection && sortField === 'hdd_space'"
                  v-bind="{
                    name:
                      sortDirection === 'asc'
                        ? 'icon-arrow-up'
                        : 'icon-arrow-down',
                  }"
                  class="absolute right-full top-1/2 h-4 w-4 -translate-x-1 -translate-y-1/2 text-gray-400"
                />Диск
              </button>
            </div>
            <div class="relative flex justify-end">
              <span
                v-if="appStore.hasDiscount"
                class="absolute left-full top-1 ml-1 flex h-10 w-10 -translate-y-1/2 -rotate-6 transform items-center rounded-full border-2 border-red-200 bg-gradient-to-tr from-red-50 to-white pl-0.5 font-semibold text-red-400 text-opacity-80"
                >-10%</span
              >
              <button
                class="relative block text-right"
                @click="toggleSort('price')"
              >
                <IconWrap
                  v-if="sortDirection && sortField === 'price'"
                  v-bind="{
                    name:
                      sortDirection === 'asc'
                        ? 'icon-arrow-up'
                        : 'icon-arrow-down',
                  }"
                  class="absolute right-full top-1/2 h-4 w-4 -translate-x-1 -translate-y-1/2 text-gray-400"
                />Цена
              </button>
            </div>
            <!-- <button class="text-right">CPU</button>
            <button class="text-right">Memory</button> -->
            <!-- <button class="text-right">Drive</button> -->
            <!-- <button class="text-right">Price</button> -->
          </div>
        </li>
        <VPSPriceLI
          v-for="(item, index) in sortedTariffs"
          :key="`pk-vps-${item.pk}`"
          v-bind="{ item, index, list: sortedTariffs }"
        />
      </ul>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { fetchTariffs, tariffsStore } from '/@/stores/tariffs'
import { appStore } from '/@/stores/app'

import VPSPriceLI from '/@/components/VPSPriceLI.vue'
import IconWrap from '/@/components/IconWrap.vue'

const formType = ref<'stand-alone' | 'one-of'>('stand-alone')

const memory = ref(2)
const cores = ref(1)

const driveType = ref<'ssd' | 'nvme'>('ssd')
const drive = ref(20)

function submit() {
  console.log('yey')
}

/**
 *
 */
function getInt(num: number | string): string {
  const absNum = Math.abs(Number(num))
  return String(absNum).split('.')[0]
}

function getRemainder(num: number | string): string {
  const remainderStr = String(num).split('.')[1]
  if (remainderStr) {
    return remainderStr.length === 1
      ? remainderStr + '0'
      : remainderStr.slice(0, 2)
  }

  return ''
}

const memPrice = 1.5
const corePrice = 1.5
const drivePrice = 1

const customPriceNum = computed(
  () =>
    memory.value * memPrice +
    cores.value * corePrice +
    drive.value * drivePrice * (driveType.value === 'ssd' ? 0.75 : 1)
)

const customPrice = computed(() => [
  getInt(customPriceNum.value),
  getRemainder(customPriceNum.value),
])

const priceWithDiscount = computed(() => {
  const num = customPriceNum.value * 0.67

  return [getInt(num), getRemainder(num)]
})

fetchTariffs()

/**
 *
 */
const sortField = ref<'price' | 'memory' | 'hdd_space' | 'cores'>()
const sortDirection = ref<'asc' | 'dsc' | null>(null)

function toggleSort(k: 'price' | 'memory' | 'hdd_space' | 'cores') {
  if (!sortDirection.value || sortField.value !== k) {
    sortDirection.value = 'asc'
  } else {
    sortDirection.value = sortDirection.value === 'asc' ? 'dsc' : null
  }

  if (!sortField.value || sortField.value !== k) sortField.value = k
}
const sortedTariffs = computed(() => {
  if (!tariffsStore.data?.results) return []
  if (!sortDirection.value) return tariffsStore.data.results

  const copy = [...tariffsStore.data?.results]
  copy.sort((a, b) => {
    let a_num = 0
    let b_num = 0

    if (sortField.value === 'memory' || sortField.value === 'hdd_space') {
      const astr = a[sortField.value].split(' ')[0]
      const bstr = b[sortField.value].split(' ')[0]

      a_num = Number(astr)
      b_num = Number(bstr)
    } else if (sortField.value) {
      a_num = a[sortField.value]
      b_num = b[sortField.value]
    }

    return sortDirection.value === 'asc' ? a_num - b_num : b_num - a_num
  })

  return copy
})
</script>

<styles lang="postcss">
/*
 *
 * Slider default styles
 *
 */

/*
 * Slider resets
 * https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
 */
.c-input-range {
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  -webkit-appearance: none;

  @apply lg:min-w-52;
}

.c-input-range:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

/*
 * Slide thumb
 */

/* Special styling for WebKit/Blink */
.c-input-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;

  @apply -mt-1.5 h-7 w-7 cursor-pointer rounded-full border-4 border-solid border-emerald-300 bg-white shadow-md dark:border-none;
}

/* All the same stuff for Firefox */
.c-input-range::-moz-range-thumb {
  @apply -mt-1.5 h-7 w-7 cursor-pointer rounded-full border-2 border-solid border-emerald-300 bg-white shadow-md dark:border-none;
}

/** Slider track */
.c-input-range::-webkit-slider-runnable-track {
  @apply h-4 w-full cursor-pointer rounded-full bg-gray-50 shadow-inner transition duration-250 ease-out-sine;
}

.c-input-range:focus::-webkit-slider-runnable-track {
  @apply bg-gray-200;
  /* @apply bg-teal-100 dark:bg-turquoise-700 dark:from-turquoise-600 dark:to-turquoise-700 dark:bg-gradient-to-b; */
}

.c-input-range::-moz-range-track {
  @apply h-4 w-full cursor-pointer rounded-full bg-gray-50 shadow-inner transition duration-250 ease-out-sine;
}

input[type='number'] {
  inset: 0.5rem;

  @apply border-4 border-transparent leading-3 focus:border-gray-100;
}
</styles>
