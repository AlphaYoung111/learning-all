import type { userState } from './store';
import { GET_DATA } from "./constant";

const mutations = {
  [GET_DATA](state: userState, payload: boolean): void {
    console.log('请求数据', payload)
    state.loading = payload
  }
}

export default mutations