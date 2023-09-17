<template>
  <main
    class="container mx-auto flex grow items-center justify-center px-4 pt-20"
  >
    <section>
      <!-- <div
        class="fixed right-0 top-24 z-30 mb-2 flex items-center rounded-full bg-gray-50 p-2"
      >
        <label
          for="form-type--stand-alone"
          class="block cursor-pointer rounded-full border px-3 py-1 text-sm"
          :class="{
            'border-emerald-400 bg-emerald-100 text-emerald-700 ':
              formType === 'stand-alone',
            'border-transparent bg-gray-50 text-gray-500':
              formType !== 'stand-alone',
          }"
        >
          <input
            id="form-type--stand-alone"
            value="stand-alone"
            name="custom-vps-drive-type"
            :checked="formType === 'stand-alone'"
            type="radio"
            class="absolute opacity-0"
            @change="formType = 'stand-alone'"
          />
          Standalone
        </label>
        <label
          for="form-type--one-of"
          class="block cursor-pointer rounded-full border px-3 py-1 text-sm"
          :class="{
            'border-emerald-400 bg-emerald-100 text-emerald-700 ':
              formType === 'one-of',
            'border-transparent bg-gray-50 text-gray-500':
              formType !== 'one-of',
          }"
        >
          <input
            id="form-type--one-of"
            value="one-of"
            name="custom-vps-drive-type"
            :checked="formType === 'one-of'"
            type="radio"
            class="absolute opacity-0"
            @change="formType = 'one-of'"
          />
          One of
        </label>
      </div> -->

      <form
        v-if="formType === 'stand-alone'"
        class="flex gap-10 rounded-2xl bg-white p-4"
      >
        <div class="p-12">
          <h4 class="mb-0.5 text-xl font-bold">Custom VPS configuration</h4>
          <p class="mb-8 max-w-sm text-gray-500">
            One/two sentences about how you can customize your VPS. Or we can
            discard of this paragraph
          </p>
          <div data-name="sliders-wrap">
            <div class="mb-6 grid grid-cols-5 items-end gap-4">
              <div class="col-span-4">
                <label
                  for="custom-vps-cores-count"
                  class="mb-2 block text-gray-500"
                  >Cores</label
                >
                <input
                  id="custom-vps-cores-count"
                  v-model.number="cores"
                  type="range"
                  min="1"
                  max="32"
                  class="c-input-range"
                />
              </div>

              <span class="text-right text-2xl font-bold">{{ cores }}</span>
            </div>
            <div class="mb-6 grid grid-cols-5 items-end gap-4">
              <div class="col-span-4">
                <label
                  for="custom-vps-cores-count"
                  class="mb-2 block text-gray-500"
                  >Mermory</label
                >
                <input
                  id="custom-vps-memory-count"
                  v-model.number="memory"
                  type="range"
                  min="2"
                  max="64"
                  class="c-input-range"
                />
              </div>
              <div class="relative flex items-baseline justify-end gap-0.5">
                <span class="text-2xl font-bold">{{ memory }}</span>
                <span
                  class="absolute bottom-1 left-full mb-1 ml-0.5 text-lg leading-4 text-gray-500"
                  >Gb</span
                >
              </div>
            </div>

            <div class="grid grid-cols-5 items-end gap-4">
              <div class="col-span-4">
                <label
                  for="custom-vps-cores-count"
                  class="mb-2 block text-gray-500"
                  >Drive</label
                >
                <ul class="mb-6 mt-2 flex items-center">
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
                </ul>

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
              <div class="relative flex items-baseline justify-end gap-0.5">
                <span class="text-2xl font-bold">{{ drive }}</span>
                <span
                  class="absolute bottom-1 left-full mb-1 ml-0.5 text-lg leading-4 text-gray-500"
                  >Gb</span
                >
              </div>
            </div>
          </div>
        </div>
        <div
          data-name="card"
          class="relative flex min-w-96 flex-col items-center justify-center rounded-lg border border-emerald-300 p-8"
        >
          <span
            class="absolute top-12 inline-block select-none justify-self-start rounded-full border border-emerald-500 bg-emerald-50 px-4 text-sm text-emerald-500"
            >selected</span
          >
          <div class="mt-24 text-gray-500 line-through">
            <span>{{ price[0] }}</span>
            <span v-if="price[1]">.{{ price[1] }}</span>
            €/mo
          </div>
          <div class="relative mb-10 mt-2 flex items-baseline text-gray-700">
            <span class="text-6xl font-extrabold leading-none tracking-tight">{{
              priceWithDiscount[0]
            }}</span>
            <span
              v-if="priceWithDiscount[1]"
              class="text-5xl font-bold leading-none tracking-tight"
              >.{{ priceWithDiscount[1] }}</span
            >
            <span class="ml-2 leading-none"
              ><span class="text-5xl font-semibold text-gray-600">€</span
              ><span class="text-gray-400">/</span
              ><span class="text-gray-600">mo</span></span
            >
          </div>
          <button
            type="submit"
            class="c-btn w-full border-0 bg-emerald-400 py-2.5 text-lg tracking-wide text-white hover:bg-emerald-600"
            @click.prevent="submit"
          >
            Select
          </button>
          <p class="mt-4 text-xs italic text-gray-500">
            You can change your parameters later
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

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

const priceNum = computed(
  () =>
    memory.value * memPrice +
    cores.value * corePrice +
    drive.value * drivePrice * (driveType.value === 'ssd' ? 0.75 : 1)
)

const price = computed(() => [
  getInt(priceNum.value),
  getRemainder(priceNum.value),
])

const priceWithDiscount = computed(() => {
  const num = priceNum.value * 0.67

  return [getInt(num), getRemainder(num)]
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
</styles>
