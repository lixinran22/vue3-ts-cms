import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb'
export let fristMenu: any = null
export default function mapMenuToRoutes(userMenu: any[]): RouteRecordRaw[] {
  // 1.先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // 获取到main文件下所有ts文件路径
  // console.log(routeFiles.keys())
  // 把所有的路径都添加上
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // 2.根据menu菜单添加所需要的routes
  const routes: RouteRecordRaw[] = []
  const _recurseGetRoute = (userMenu: any[]) => {
    for (const menu of userMenu) {
      if (menu.type === 2) {
        if (!fristMenu) {
          fristMenu = menu
        }
        const route = allRoutes.find((item) => item.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenu)
  return routes
}
// 根据路由匹配激活的菜单
export function pathMapToMenu(userMenus: any, currentPath: any) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findmenu: any = pathMapToMenu(menu.children ?? [], currentPath)
      if (findmenu) {
        return findmenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
// 根据路由匹配面包屑

export function pathMapbreadcrumbs(userMenus: any, currentPath: any) {
  const breadcrumbs: IBreadcrumb[] = []
  for (const menu of userMenus) {
    if (menu.type === 1) {
      breadcrumbs.push()
      const findmenu: any = pathMapToMenu(menu.children ?? [], currentPath)
      if (findmenu) {
        return findmenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
