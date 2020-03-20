<template>
  <div class="layout-header">
    <a-layout-header>
      我是一个header
    </a-layout-header>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.layout-header {
  // position: fixed;
  top: 0;
  left: 200px;
  right: 0;
  height: 64px;
  transition: left .3s;
  .ant-layout-header {
    background: #fff;
    padding: 0;
  }
}
</style>
