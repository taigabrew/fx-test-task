<template>
  <div class="container">
    <div v-if="status === 'loading'">loading...</div>
    <div v-else-if="status === 'ok'">
      {{ data }}
    </div>
    <div v-else>Error</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type TariffsData = {
  fields: [string, string][]
  results: {
    pk: number
    name: string
    price: number
    bandwith: string
    cores: number
    hdd_space: string
    memory: string
  }[]
}

const status = ref<'ok' | 'loading' | 'error' | 'uninitialized'>(
  'uninitialized'
)
const data = ref<TariffsData>()
async function getTariffs() {
  if (status.value === 'loading') return

  status.value = 'loading'
  try {
    const resp = await fetch('/api/tariffs.json')

    if (!resp.ok) throw new Error(`Can't fetch tariffs`)

    const _data: TariffsData | '' = await resp.json()

    if (_data) data.value = _data

    status.value = 'ok'
  } catch (error) {
    console.error(error)
    status.value = 'error'
  }
}

getTariffs()
</script>
