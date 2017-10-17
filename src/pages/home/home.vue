<template>
  <div class="home">
    <m-header></m-header>
    <div class="container">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MHeader from '../../components/mHeader/mHeader'
  export default {
    name: 'home',
    components:{
      MHeader
    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .home{
   height:100%;
   width:100%;
 }
  .container{
    height:85%;
    width:100%;
  }
</style>
