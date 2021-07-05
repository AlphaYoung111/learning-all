import { ActionContext } from 'vuex'
import { GET_DATA } from './constant'
import { userState } from './store'
const action = {
  [GET_DATA]({ commit }: ActionContext<userState, unknown>): void {
    console.log('module action')

    setTimeout(() => {
      const payload = false
      commit('GET_DATA', payload)
    }, 1000)
  }
}
export default action