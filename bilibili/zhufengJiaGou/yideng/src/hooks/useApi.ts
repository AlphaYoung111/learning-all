import { Ref, ref } from 'vue'


export type ApiRequest = () => Promise<void>

export interface UsableAPI<T> {
  response: Ref<T | undefined>
  request: ApiRequest
}

function useApi<T>(url: RequestInfo, options?: RequestInit): UsableAPI<T> {
  const response: Ref<T | undefined> = ref()
  const request = async () => {
    const res = await fetch(url, options)
    const data = await res.json()
    response.value = data
  }
  return {
    response,
    request
  }
}

export {
  useApi
}

export default useApi