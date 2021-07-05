import { createStore } from './store';
import action from './action'
import mutations from './mutation'
import getters from './getters'
const state = createStore()
export default {
  namespaced: true,
  state,
  action,
  mutations,
  getters
}