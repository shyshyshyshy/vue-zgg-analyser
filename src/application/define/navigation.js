// 导航菜单结构
import Modules from './modules'

export default [
  { module: Modules.ModuleHome },

  {
    module: Modules.ModuleDemo,
    routes: [
      {
        module: Modules.ModuleDemo1
      },
      {
        module: Modules.ModuleDemoDetail,
        routes: [
          {
            module: Modules.ModuleDemoDetail1
          }
        ]
      }
    ]
  },

  // 权限菜单
  { module: Modules.ModuleAuth }
]
