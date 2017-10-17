<template>
  <div class="mHeader">
      <div class="mHeader-logo">osm门店系统</div>
      <div class="mHeader-nav">
        <router-link :to="{path:'/store'}">
           <dl>
             <dt><img src="../../../static/img/commodity.png" alt="" class="mHeader-icon"></dt>
             <dd class="mHeader-navList">门店管理</dd>
           </dl>
        </router-link>
        <router-link :to="{path:'/commodity'}">
          <dl>
            <dt><img src="../../../static/img/commodity.png" alt="" class="mHeader-icon"></dt>
            <dd class="mHeader-navList">商品管理</dd>
          </dl>
        </router-link>
        <router-link :to="{path:'/transaction'}">
          <dl>
            <dt><img src="../../../static/img/commodity.png" alt="" class="mHeader-icon"></dt>
            <dd class="mHeader-navList">交易管理</dd>
          </dl>
        </router-link>
        <router-link :to="{path:'/marketing'}">
          <dl>
            <dt><img src="../../../static/img/commodity.png" alt="" class="mHeader-icon"></dt>
            <dd class="mHeader-navList">营销管理</dd>
          </dl>
        </router-link>
      </div>
    <div class="mHeader-section">
      <header-section></header-section>
    </div>
  </div>
</template>

<script>
  import headerSection from '../headerSection/headerSection.vue'
  export default {
    name: 'mHeader',
    components:{
      headerSection
    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mHeader{
    height: 15%;
    background: blue;
    width:100%;
  }
  .mHeader-logo{
    float: left;
    color: #fff;
    font-size: 30px;
    padding-top:30px;
    padding-left:30px;
  }
  .mHeader-nav{
    float: left;
    background: blue;
  }
  .mHeader-section{
    float: right;
    margin-right: 20px;
    margin-top: 23px;
  }
  .mHeader-icon{
    width:30px;
    height:30px;
  }
  .mHeader-nav {
    display: flex;
    padding-top:20px;
    margin-left: 150px;
  }
  .mHeader-nav dl{
    margin-left: 60px;
  }
  .mHeader-nav dt{
    text-align: center;
    margin-bottom: 10px;
  }
  .mHeader-navList{
    color: #fff;
  }

</style>
