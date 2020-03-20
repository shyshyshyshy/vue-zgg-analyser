<template>
  <div>
    我是Home页面
  </div>
</template>

<script>
import { getData } from '../../server/demo'

export default {
  name: 'Home',
  mounted() {
    getData().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
