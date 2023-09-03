<template>
  <li class="rounded-lg bg-white shadow-shade md:min-w-48">
    <section>
      <header class="border-b-2 border-gray-100 px-4 pb-2 pt-3">
        <h4 class="text-xl text-gray-700 sm:mb-2 sm:text-lg">
          {{ item.name }}
        </h4>
        <div class="flex items-baseline">
          <span class="relative -top-0.5 text-3xl text-gray-700 sm:text-2xl"
            >$</span
          ><span
            class="text-5xl font-extrabold leading-none text-gray-800 sm:text-4xl sm:leading-6"
            >{{ item.price }}</span
          >&thinsp;<span
            class="relative -top-0.5 text-xl text-gray-700 sm:-top-px sm:text-base"
            ><span class="text-gray-300">/</span>&thinsp;мес.</span
          >
        </div>
      </header>

      <ul class="grid grid-cols-2 gap-6 p-4 lg:gap-4">
        <li class="col-span-2 flex items-start gap-2 lg:gap-1.5">
          <figure
            role="presentation"
            class="grid w-10 grid-cols-3 gap-0.5 bg-gray-50 p-1 lg:w-9 lg:gap-px"
          >
            <figure
              v-for="i in item.cores"
              :key="`${item.pk}-dot-${i}`"
              class="h-2 w-2 rounded-sm bg-gray-400"
            />
          </figure>

          <div>
            <h5 class="whitespace-nowrap text-xs leading-4 text-gray-500">
              {{ fields.cores }}
            </h5>
            <div class="text-lg font-bold leading-6 text-gray-700">
              {{ item.cores }}
            </div>
          </div>
        </li>
        <li class="flex gap-2 lg:gap-1.5">
          <figure class="grid h-10 w-10 rounded-full bg-gray-50 lg:h-9 lg:w-9">
            <IconWrap
              v-bind="{ name: 'icon-chip' }"
              class="m-auto h-7 w-7 text-gray-500 lg:h-6 lg:w-6"
            />
          </figure>
          <div>
            <h5 class="whitespace-nowrap text-xs leading-4 text-gray-500">
              {{ fields.memory }}
            </h5>
            <div class="flex items-baseline">
              <span class="mr-1 text-lg font-bold leading-6 text-gray-700">{{
                memory.val
              }}</span>
              <span class="text-sm">{{ memory.unit }}</span>
            </div>
          </div>
        </li>
        <li class="flex gap-2 lg:gap-1.5">
          <figure class="grid h-10 w-10 rounded-full bg-gray-50 lg:h-9 lg:w-9">
            <IconWrap
              v-bind="{ name: 'icon-harddrive' }"
              class="m-auto h-7 w-7 text-gray-500 lg:h-6 lg:w-6"
            />
          </figure>
          <div>
            <h5 class="whitespace-nowrap text-xs leading-4 text-gray-500">
              {{ fields.hdd_space }}
            </h5>
            <div class="flex items-baseline">
              <span class="mr-1 text-lg font-bold leading-6 text-gray-700">{{
                hdd.val
              }}</span>
              <span class="text-sm text-gray-600">{{ hdd.unit }}</span>
            </div>
          </div>
        </li>

        <li class="col-span-2 flex gap-2 lg:gap-1.5">
          <figure class="grid h-10 w-10 rounded-full bg-gray-50 lg:h-9 lg:w-9">
            <IconWrap
              v-bind="{ name: 'icon-reverse' }"
              class="m-auto h-7 w-7 text-gray-500 lg:h-6 lg:w-6"
            />
          </figure>
          <div>
            <h5 class="whitespace-nowrap text-xs leading-4 text-gray-500">
              {{ fields.bandwith }}
            </h5>
            <div class="flex items-baseline">
              <span class="mr-1 text-lg font-bold leading-6 text-gray-700">{{
                bandwith.val
              }}</span>
              <span class="text-sm text-gray-600">{{ bandwith.unit }}</span>
            </div>
          </div>
        </li>
      </ul>

      <footer class="p-2">
        <button class="c-btn w-full bg-gray-50">Выбрать</button>
      </footer>
    </section>
  </li>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { TariffItem, tariffsStore } from '/@/stores/tariffs'
import IconWrap from './IconWrap.vue'

const props = defineProps<{
  item: TariffItem
}>()

const fields = computed(() => {
  const l = tariffsStore.data?.fields || []

  const rec: Record<string, string> = {}

  for (const item of l) rec[item[0]] = item[1]

  return rec
})

const memory = computed(() => {
  const [val, unit] = props.item.memory.split(' ')
  return { val, unit }
})
const hdd = computed(() => {
  const [val, unit] = props.item.hdd_space.split(' ')
  return { val, unit }
})
const bandwith = computed(() => {
  const [val, unit] = props.item.bandwith.split(' ')
  return { val, unit }
})
</script>
