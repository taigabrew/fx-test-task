<template>
  <li
    class="mt-4 grid grid-cols-7 items-center gap-y-3 md:mt-0 md:gap-0"
    :class="{
      'relative -mx-5 rounded-2xl border-2 border-emerald-300 px-4 md:-mx-6 md:px-6 lg:-mx-9 lg:px-9':
        item.pk === 434,
      'border-b-4 last:border-0': item.pk !== 434,
      'border-transparent': list[index + 1]?.pk === 434,
      'border-gray-100': list[index + 1]?.pk !== 434 && item.pk !== 434,
      'pb-3 pt-5 md:pb-7 md:pt-9': appStore.hasDiscount && item.pk === 434,
      'py-8': !appStore.hasDiscount && item.pk === 434,
      'pb-4 pt-8': appStore.hasDiscount && item.pk !== 434,
      'py-6': !appStore.hasDiscount && item.pk !== 434,
    }"
  >
    <span
      v-if="item.pk === 434"
      class="absolute left-5 top-px -translate-y-1/2 transform rounded-full border-2 border-emerald-300 bg-white px-3 py-0.5 text-xs font-normal leading-none text-emerald-500 md:left-8 md:px-4"
      >Популярно</span
    >
    <!-- >Popular</span -->

    <div
      class="col-span-7 md:col-span-2"
      :class="{
        'text-gray-600 md:text-sm': item.pk !== 434,
        'flex flex-col items-start font-medium text-emerald-600':
          item.pk === 434,
      }"
    >
      {{ item.name }}

      <div v-if="item.pk === 433" class="text-xs leading-4">
        <a
          href="https://fornex.com/ru/ssd-vps/cloud-nvme-1-1-10/?term=test"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block border-b border-blue-400 text-blue-500 transition-colors hover:border-blue-200 focus:text-blue-600"
          >Взять на тест</a
        >
        <span class="ml-2 text-gray-500">4 дня за 0.9 €</span>
      </div>
    </div>

    <div
      class="col-span-7 grid grid-cols-3 items-baseline gap-6 pr-12 text-gray-800 md:col-span-4 md:grid-cols-4"
    >
      <span
        class="relative pt-2.5 text-xl font-bold md:pt-0 md:text-right md:text-base"
        ><span
          class="absolute left-0 top-0 origin-top-left scale-90 text-xxs font-light leading-4 text-gray-500 md:hidden"
          >Процессор</span
        >{{ item.cores }}</span
      >
      <span class="relative whitespace-nowrap pt-2.5 md:pt-0 md:text-right"
        ><span
          class="absolute left-0 top-0 origin-top-left scale-90 text-xxs font-light leading-4 text-gray-500 md:hidden"
          >Память</span
        ><span class="text-xl font-bold md:text-base">{{
          item.memory.split(' ')[0]
        }}</span
        >&thinsp;<span class="text-xs text-gray-600 md:text-xxs">{{
          item.memory.split(' ')[1]
        }}</span></span
      >
      <span class="relative whitespace-nowrap pt-2.5 md:pt-0 md:text-right">
        <span class="text-xl font-bold md:text-base"
          ><span
            class="absolute left-0 top-0 origin-top-left scale-90 text-xxs font-light leading-4 text-gray-500 md:hidden"
            >Диск</span
          >{{ item.hdd_space.split(' ')[0] }}</span
        >&thinsp;<span
          class="whitespace-nowrap text-xs text-gray-600 md:text-xxs"
          >{{ item.hdd_space.split(' ')[1] }} SSD</span
        ></span
      >
      <span class="relative hidden text-right md:block">
        <span
          v-if="appStore.hasDiscount"
          class="absolute bottom-full right-0 block scale-90 transform whitespace-nowrap text-xs"
        >
          <figure
            class="absolute -inset-x-1 top-2 h-0.5 rounded-full bg-red-400 bg-opacity-60"
          />
          {{ (item.price * 1.333).toFixed(2) }}&thinsp;<span class="text-xxs"
            >€/мес</span
          ></span
        >
        <span class="text-lg font-bold leading-3">{{ item.price }}</span
        >&thinsp;<span class="text-xs text-gray-600">€/мес</span></span
      >
    </div>

    <span class="relative col-span-3 pt-5 md:hidden">
      <span
        v-if="appStore.hasDiscount"
        class="absolute left-0 top-0 block scale-90 transform whitespace-nowrap text-xs"
      >
        <span class="absolute inset-0 top-2">
          <figure
            class="absolute -inset-x-1 top-0 h-0.5 rounded-full bg-red-400 bg-opacity-60"
          />
          <span
            class="text-opacity-8 absolute left-full top-px ml-2 flex h-10 w-10 -translate-y-1/2 transform items-center rounded-full pl-0.5 text-sm font-medium text-red-400"
            >-10%</span
          >
        </span>
        {{ (item.price * 1.333).toFixed(2) }}&thinsp;<span class="text-xxs"
          >€/мес</span
        ></span
      >
      <span class="text-2xl font-bold leading-3">{{ item.price }}</span
      >&thinsp;<span class="text-xs text-gray-600">€/мес</span></span
    >

    <button
      class="c-btn col-span-4 h-full py-1 md:col-span-1 md:h-auto md:text-sm"
      :class="{
        ' bg-emerald-400 font-light tracking-wide text-white hover:bg-emerald-500':
          item.pk === 434,
        'border-2 border-emerald-500 text-emerald-700': item.pk !== 434,
      }"
    >
      Выбрать
    </button>
  </li>
</template>

<script lang="ts" setup>
import { TariffItem } from '/@/stores/tariffs'
import { appStore } from '/@/stores/app'

defineProps<{ item: TariffItem; index: number; list: TariffItem[] }>()
</script>
