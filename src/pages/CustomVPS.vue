<template>
  <main
    class="container mx-auto flex grow flex-col items-center px-4 pb-32 pt-32"
  >
    <section>
      <form
        v-if="formType === 'stand-alone'"
        class="flex gap-10 rounded-3xl bg-white p-4"
      >
        <div class="p-12">
          <h4 class="-mt-4 mb-8 text-xl font-bold">Custom VPS configuration</h4>
          <!-- <h4 class="mb-0.5 text-xl font-bold">Custom VPS configuration</h4> -->
          <!-- <p class="mb-8 max-w-sm text-gray-500">
            One/two sentences about how you can customize your VPS. Or we can
            discard of this paragraph
          </p> -->
          <div data-name="sliders-wrap">
            <div class="mb-6 grid grid-cols-7 items-end gap-4">
              <div class="col-span-5">
                <label
                  for="custom-vps-cores-count"
                  class="mb-2 block text-gray-500"
                  >CPU cores</label
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

              <span class="col-span-2 text-right text-2xl font-bold">{{
                cores
              }}</span>
            </div>
            <div class="mb-6 grid grid-cols-7 items-end gap-4">
              <div class="col-span-5">
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
              <div
                class="relative col-span-2 flex items-baseline justify-end gap-0.5"
              >
                <span class="min-w-10 text-right text-2xl font-bold">{{
                  memory
                }}</span>
                <span
                  class="absolute bottom-1 left-full mb-1 ml-0.5 text-lg leading-4 text-gray-500"
                  >Gb</span
                >
              </div>
            </div>

            <div class="item-end grid grid-cols-7 gap-4">
              <div class="col-span-5">
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
              <div class="relative col-span-2 flex items-end justify-end gap-1">
                <span class="text-right text-2xl font-bold">{{ drive }}</span>
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
          class="relative flex min-w-96 flex-col items-center justify-center rounded-2xl border-2 border-emerald-400 p-8"
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
            class="c-btn w-full border-0 bg-emerald-400 py-2.5 text-lg uppercase tracking-wider text-white hover:bg-emerald-600"
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

    <section class="mt-12 min-w-2xl rounded-3xl bg-white px-16 py-12">
      <header class="-mt-4 text-center font-medium text-gray-500">
        Predefined price plans
      </header>
      <ul v-if="tariffsStore.data?.results" class="mt-8">
        <li
          class="grid grid-cols-7 items-center rounded border-gray-100 bg-gray-50 py-3 last:border-0"
        >
          <div class="col-span-2"></div>
          <div
            class="col-span-4 grid grid-cols-4 gap-6 pr-12 text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            <button class="text-right">CPU cores</button>
            <button class="text-right">Memory</button>
            <button class="text-right">Drive</button>
            <button class="text-right">Price</button>
          </div>
        </li>
        <li
          v-for="(item, index) in tariffsStore.data?.results"
          :key="`pk-vps-${item.pk}`"
          class="grid grid-cols-7 items-center"
          :class="{
            'relative -mx-9 -mt-px rounded-2xl border-2 border-emerald-300 px-8 py-6':
              item.pk === 434,
            'border-b-2 border-gray-100 py-4 last:border-0': item.pk !== 434,
          }"
        >
          <span
            v-if="item.pk === 434"
            class="absolute -top-0.5 left-8 -translate-y-1/2 transform rounded-full border-2 border-emerald-300 bg-white px-4 py-0.5 text-xs font-normal leading-none text-emerald-500"
            >Popular</span
          >

          <div
            class="col-span-2"
            :class="{
              'text-sm text-gray-600': item.pk !== 434,
              'flex flex-col items-start font-medium text-emerald-600':
                item.pk === 434,
            }"
          >
            {{ item.name }}
          </div>

          <div class="col-span-4 grid grid-cols-4 gap-6 pr-12 text-gray-800">
            <span class="text-right font-bold">{{ item.cores }}</span>
            <span class="text-right"
              ><span class="font-bold">{{ item.memory.split(' ')[0] }}</span
              >&thinsp;<span class="text-xxs text-gray-600">{{
                item.memory.split(' ')[1]
              }}</span></span
            >
            <span class="text-right">
              <span class="font-bold">{{ item.hdd_space.split(' ')[0] }}</span
              >&thinsp;<span class="text-xxs text-gray-600"
                >{{ item.hdd_space.split(' ')[1] }} SSD</span
              ></span
            >
            <span class="text-right"
              ><span class="font-bold">{{ item.price }}</span
              >&thinsp;<span class="text-xxs text-gray-600">€/mo</span></span
            >
          </div>

          <button
            class="c-btn py-1 text-sm"
            :class="{
              ' bg-emerald-400 text-white hover:bg-emerald-500':
                item.pk === 434,
              'border-2 border-emerald-500 text-emerald-700': item.pk !== 434,
            }"
          >
            Select
          </button>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { fetchTariffs, tariffsStore } from '/@/stores/tariffs'

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

fetchTariffs()
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

  @apply min-w-52;
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
