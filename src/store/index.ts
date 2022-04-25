import { createStore } from 'vuex'
import login from './login/login'

interface IRootState {
  name: string
}
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'lizi'
    }
  },
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    login
  }
})
export const setupStore = {
  install: () => {
    store.dispatch('login/loadLogin')
  }
}
export { IRootState }
export default store
