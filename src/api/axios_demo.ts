import axios from 'axios'
axios.defaults.baseURL = 'http://152.136.185.210:5000/'
axios.defaults.timeout = 1000
// 请求拦截
// 第一个参数是请求发送成功时执行的函数，第二个参数是请求失败时执行的函数
// config为请求时的配置信息
axios.interceptors.request.use(
  (config) => {
    const token = ''
    if (token) {
      // config.headers?.Authord=
    }
    return config
  },
  (err) => {
    return err
  }
)
// 响应拦截
axios.interceptors.response.use(
  (config) => {
    return config
  },
  (err) => {
    return err
  }
)
