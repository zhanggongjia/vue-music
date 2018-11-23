<template>
  <div id="app">
    <vheader></vheader>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
//<vheader></vheader>
 import vheader from 'components/m-header/m-header'
 import tab from 'components/tab/tab'
  export default {

    components: {
     vheader,tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
  #app 
    color red
    .box
      color red


</style>
