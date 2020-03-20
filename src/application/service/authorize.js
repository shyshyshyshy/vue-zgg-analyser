import Router from './router'

class Authorize {
  // 判断是否登陆
  isLogin = () => {
    // if () {
    return true;
    // }
    // return false
  }

  // 获取当前用户能访问的模块
  modules = () => {
    return [
      { path: 'home' },
      { path: 'menu-ModuleDemo' },
      { path: 'list1' },
      { path: 'menu-ModuleDemoDetail' },
      { path: 'list2-2-1' },
      { path: 'auth' }
    ]
  }

  // 判断模块是否可以被访问
  canAccess = (pathname) => {
    // 默认界面
    if (pathname === '/' || pathname === '/404') {
      return true;
    }

    // 如果没有登陆则不能访问
    if (this.isLogin() === false) {
      return false
    }

    // 超级管理员，默认拥有所有权限
    // TODO:
    // if (this.roleId() === 1000) {
    //   return true
    // }

    // 当前角色能访问的所有模块
    const modules = this.modules()

    // 过滤路径中的字符串
    const path = pathname.replace(/\/*([\W\w]+)/, '$1');

    // 遍历角色拥有的所有模块
    let canAccess = false

    modules.forEach((module) => {
      // 判断当前路径是否存在于模块中
      if (module.path === path) {
        canAccess = true
      }
    })

    return canAccess
  }

  // 菜单栏
  navigation = () => {
    return Router.navigationByAccessHook(this.canAccess)
  }
}

export default Authorize
