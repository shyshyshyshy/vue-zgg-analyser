<template>
  <a-layout class="layout-wrap">
    <Menus :selectedMenu="selectedMenu" :selectedModule="selectedModule" @onChangeMenuWidth="onChangeMenuWidth" />
    <a-layout ref="layoutContent" class="layout-content">
      <headers ref="contentHeader" />
      <a-layout-content class="content">
        <breadcrumb />
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Menus from './menu'
import Headers from './header'
import Breadcrumb from './breadcrumb'
import Router from '../../application/service/router'

import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Menus,
    Headers,
    Breadcrumb
  },
  data() {
    return {
      selectedMenu: [],                     // 选中的菜单
      selectedModule: {}                    // 选中的模块
    }
  },
  created() {
    this.getBreadcrumb(window.location.pathname)
  },
  computed: {
    ...mapGetters(['breadcrumb'])
  },
  methods: {
    ...mapMutations({
      setBreadcrumb: 'SET_BREADCRUMB'
    }),
    // 获取面包屑
    getBreadcrumb(pathname) {
      const breadcrumb = Router.breadcrumbByPath(pathname)
      this.setBreadcrumb(breadcrumb)
      // 选中的菜单
      this.selectedMenu = []
      this.breadcrumb.forEach(item => {
        if (item.isMenu) {
          this.selectedMenu.push(item.key)
        }
      })
      // 选中的模块
      this.selectedModule = this.breadcrumb.slice(-1)[0]
    },
    // 监听菜单的 width 变化
    onChangeMenuWidth(flag) {
      if (flag) {
        this.$refs.layoutContent.$el.style.left = '80px'
        this.$refs.contentHeader.$el.style.left = '80px'
      } else {
        this.$refs.layoutContent.$el.style.left = '200px'
        this.$refs.contentHeader.$el.style.left = '200px'
      }
    }
  },
  watch: {
    // 监听路由，获取路由对应的面包屑
    $route(newV) {
      this.getBreadcrumb(newV.path)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-wrap {
  min-height: 100vh;
  .layout-content {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 200px;
    transition: left .3s;
    .content {
      // margin: 64px 16px 0;
      margin: 0 16px;
    }
  }
}
</style>
