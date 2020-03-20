class Module {
  constructor({ id, key = '', title = '', path = '' }) {
    this.id = id            // 对应服务器的模块id
    this.key = key          // 模块的key, 标示
    this.title = title      // 模块的标题
    this.path = path        // 模块的路径
    this.isMenu = false     // 是否是菜单
    this.isPage = false     // 是否是页面
    this.canAccess = false  // 是否有访问权限
  }
}

class Menu extends Module {
  constructor({ id, key, icon = '', title = '' }) {
    super({ id, key, title, path: `menu-${key}` })
    this.icon = icon        // 菜单icon
    this.isMenu = true      // 是否是菜单
  }
}

class Page extends Module {
  constructor({ id, key, icon = '', title = '', path = '' }) {
    super({ id, key, title, path })
    this.icon = icon       // 菜单icon
    this.isPage = true     // 是否是页面
  }
}

// class Operate extends Module {
//   constructor({ id, key, title = '' }) {
//     super({ id, key, title, path: `operate-${key}` })
//     this.isOperate = true   // 是否是页面操作
//   }
// }

// 系统所有注册的模块
export default {
  ModuleHome: new Page({ id: '1-1', key: 'PageHome', title: 'Home', icon: 'search', path: 'home' }),

  ModuleDemo: new Menu({ id: '2-1', key: 'ModuleDemo', title: '列表2', icon: 'user' }),
  ModuleDemo1: new Page({ id: '2-2', key: 'ModuleDemo1', title: '列表2-1', icon: 'team', path: 'list1' }),
  ModuleDemoDetail: new Menu({ id: '2-3', key: 'ModuleDemoDetail', title: '列表2-2', icon: 'team' }),
  ModuleDemoDetail1: new Page({ id: '2-3-1', key: 'ModuleDemoDetail1', title: '列表2-2-1', icon: 'team', path: 'list2-2-1' }),

  // 权限配置
  ModuleAuth: new Page({ id: '3-1', key: 'ModuleAuth', title: '权限配置', icon: 'team', path: 'auth' })
}
