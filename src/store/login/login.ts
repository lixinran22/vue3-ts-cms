import { Module } from 'vuex'
import { IRootState } from '../index'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/api/login/login'
import localCache from '@/utils/cache'
import router from '@/router/index'
import mapMenuToRoutes from '@/utils/mapMenu'

interface ILoginState {
  token: string
  info: object
  userMenus: object[]
}
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      info: {},
      userMenus: []
    }
  },
  mutations: {
    saveToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.info = userInfo
    },
    changeUserMenus(state, userRoles) {
      state.userMenus = userRoles
      const routes = mapMenuToRoutes(state.userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      const notFoundRoute = require('@/router/notFound')
      router.addRoute(notFoundRoute.default)
    }
  },
  actions: {
    loadLogin(context) {
      const token = localCache.getCache('token')
      if (token) {
        context.commit('saveToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        context.commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        context.commit('changeUserMenus', userMenus)
      }
    },
    async accountLoginAction(context, payload: any) {
      try {
        const LoginUserInfo = await accountLoginRequest(payload)
        const { id, token } = LoginUserInfo.data.data
        localCache.setCache('token', token)
        context.commit('saveToken', token)

        const userInfoRes = await requestUserInfoById(id)
        const userInfo = userInfoRes.data.data
        context.commit('changeUserInfo', userInfo)
        localCache.setCache('userInfo', userInfo)

        const userMenusRes = await requestUserMenusByRoleId(userInfo.role.id)
        const userRoles = userMenusRes.data.data
        context.commit('changeUserMenus', userRoles)
        localCache.setCache('userMenus', userRoles)
        router.push('/main')
      } catch (err: any) {
        console.log(err)
      }
    },
    phoneLoginAction(context, payload: any) {
      console.log(payload)
    }
  }
}
export default loginModule
