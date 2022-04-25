import { BASE_RUL, TIMEOUT } from './request/config'
import LZRequest from './request'
import localCache from '@/utils/cache'

const lzRequest = new LZRequest({
  baseURL: BASE_RUL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err: any) => {
      console.log('请求失败的拦截')
      return err
    }
  }
})
export { lzRequest }
