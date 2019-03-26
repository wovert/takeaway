<template>
  <div id="app">
    <router-view></router-view>
    <!-- $route当前路由-->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide'
console.log(FooterGuide)
export default {
  components: {
    FooterGuide
  },
  name: 'App'
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
