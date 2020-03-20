<template functional>
  <a-sub-menu :key="props.menuInfo.module.key">
    <span slot="title">
      <a-icon :type="props.menuInfo.module.icon || ''" /><span>{{ props.menuInfo.module.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.routes">
      <template v-if="item.module.canAccess">
        <sub-menu v-if="item.routes" :key="item.module.key" :menu-info="item" />
        <a-menu-item v-else :key="item.module.key">
          <router-link :to="`/${item.module.path}`" tag="div">
            <a-icon :type="props.menuInfo.module.icon || ''" />
            <span>{{ item.module.title }}</span>
          </router-link>
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: null
    }
  }
};
</script>
