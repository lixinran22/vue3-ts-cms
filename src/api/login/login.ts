import { lzRequest } from '../index'
interface IAccount {
  name: string
  password: string
}
interface IData<T = any> {
  code: number
  data: T
}
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export function accountLoginRequest(account: IAccount) {
  return lzRequest.request<IData>({
    method: 'post',
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return lzRequest.request<IData>({
    method: 'get',
    url: LoginAPI.LoginUserInfo + id
  })
}
export function requestUserMenusByRoleId(id: number) {
  return lzRequest.request<IData>({
    method: 'get',
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
