<template>
  <div class="store">
    <left-nav class="leftNav"></left-nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import LeftNav from '../../components/leftNav/leftNav.vue'
export default {
  name: 'store',
  components:{
    LeftNav
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .store{
    width:100%;
    height:100%;
  }
  /*公共样式  */
  .leftNav{
    float: left;
    width: 200px;
    height: 100%;
  }
  .content{
    margin-left:200px;
    background: red;
    height: 100%;


  }

</style>
