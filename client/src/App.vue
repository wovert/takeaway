<template>
  <div id="app">
    <router-view></router-view>
    <!-- $route当剝路由-->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from '@/components/FooterGuide/FooterGuide'
// import {categoriesApi} from '@/api'
export default {
  components: {
    FooterGuide
  },
  name: 'App',
  async mounted () {
    // const result = await categoriesApi()
    // console.log(result)

    // 1. 方法1
    // this.$store.dispatch('getAddress')

    // 2. 方法2
    this.getAddress()
  },
  methods: {
    // 2. 方法2
    ...mapActions(['getAddress', 'getCategories'])
  }
}
</script>

<style lang='stylus' rel='stylsheet/stylus'>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100%
  height 100%
  background #f5f5f5
</style>
