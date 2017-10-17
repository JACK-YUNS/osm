<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
       <div v-for="item in data1">
         <router-link :to="{path:'/store/data'}">
           <el-menu-item   :index="item.index" class="leftNav-navList">
             <i :class="item.className"></i>{{item.title}}
           </el-menu-item>
         </router-link>

       </div>


  </el-menu>
</template>

<script>
  export default {
    name: 'leftNav',
    data () {
      return {
        data1:[
          {
            index:1,
            className:"el-icon-message",
            title:"门店1"
          },
          {
            index:2,
            className:"el-icon-menu",
            title:"门店2"
          },
          {
            index:3,
            className:"el-icon-setting",
            title:"门店3"
          },
        ]

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-vertical-demo{
    text-align: center;
  }
</style>
