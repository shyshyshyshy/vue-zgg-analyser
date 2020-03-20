<template>
  <div class="sider-wrap">
    <a-layout-sider class="sider-content" collapsible v-model="collapsed">
      <div class="logo">我是一个logo</div>
      <a-menu
        theme="dark"
        :defaultOpenKeys="[...selectedMenu]"
        :defaultSelectedKeys="[selectedModule.key]"
        mode="inline"
      >
        <template v-for="item in menuList">
          <template v-if="item.module.canAccess">
            <sub-menu v-if="item.routes" :menu-info="item" :key="item.module.key" />
            <a-menu-item v-else :key="item.module.key" :data-key="item.module.key">
              <router-link :to="`/${item.module.path}`" tag="div">
                <a-icon :type="item.module.icon || ''" />
                <span>{{ item.module.title }}</span>
              </router-link>
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import application from '../../application'

import SubMenu from './subMenu'

export default {
  name: 'LayoutSider',
  props: {
    selectedMenu: {
      type: Array,
      default: () => {}
    },
    selectedModule: {
      type: Object,
      default: () => ({
        key: ''
      })
    }
  },
  components: { SubMenu },
  data() {
    return {
      collapsed: false,
      menuList: [...application.authorize.navigation()]
    }
  },
  created() {
    console.log(this.menuList, this.selectedModule)
  },
  watch: {
    collapsed(newV) {
      this.$emit('onChangeMenuWidth', newV)
    }
  }
};
</script>

<style scoped lang="scss">
.sider-wrap {
  position: relative;
  min-height: 100vh;
  /deep/.sider-content {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    /deep/.logo {
      margin: 16px;
      height: 32px;
      line-height: 32px;
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
