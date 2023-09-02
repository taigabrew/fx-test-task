import { ref, watch } from 'vue'
import type { WatchStopHandle } from 'vue'

export default function useEvent(
  _el: EventTarget,
  name: keyof WindowEventMap,
  handler: EventListenerOrEventListenerObject | null,
  opts?: AddEventListenerOptions | boolean
): WatchStopHandle {
  const el = ref(_el)
  const unwatch = watch(
    el,
    (el, _, onCleanup) => {
      el && el.addEventListener(name, handler, opts)
      onCleanup(() => {
        el && el.removeEventListener(name, handler, opts)
      })
    },
    { immediate: true }
  )

  return unwatch
}
