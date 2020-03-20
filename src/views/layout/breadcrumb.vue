<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item v-for="item of breadcrumb" :key="item.key">
      <!-- <router-link to="/Bill">Bill</router-link> -->
      {{ item.title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Breadcrumb',
  computed: {
    ...mapGetters(['breadcrumb'])
  }
};
</script>

<style scoped lang="scss">

</style>
