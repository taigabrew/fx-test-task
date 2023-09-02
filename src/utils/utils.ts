/**
 * Resolves promise on timeout
 */
export function timeoutPromise(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
