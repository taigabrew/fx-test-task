import { reactive } from 'vue'

import { appStore } from './app'
import { timeoutPromise } from '/@/utils/utils'
import type { StoreStatus } from '/@/types'

export type TariffItem = {
  pk: number
  name: string
  price: number

  cores: number
  bandwith: string
  hdd_space: string
  memory: string
}

export type TariffsData = {
  fields: [string, string][]
  results: TariffItem[]
}

export const tariffsStore = reactive<{
  status: StoreStatus
  data: TariffsData | null
}>({
  status: 'uninitialized',
  data: null,
})

export async function fetchTariffs() {
  if (tariffsStore.status === 'loading') return

  tariffsStore.status = 'loading'
  try {
    if (appStore.delay) await timeoutPromise(appStore.delay)
    if (appStore.isErrorResp) throw new Error('Response error')

    const resp = await fetch('/api/tariffs.json')

    if (!resp.ok) throw new Error(`Can't fetch tariffs`)

    const _data: TariffsData | '' = await resp.json()

    if (_data) tariffsStore.data = _data

    tariffsStore.status = 'ok'
  } catch (error) {
    console.error(error)
    tariffsStore.status = 'error'
  }
}
