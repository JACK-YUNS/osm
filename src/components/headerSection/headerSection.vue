<template>
  <div class="headerSection">
    <el-dropdown trigger="click" class="notification-list">
      <div class="notification-btn ">
        <img src="../../../static/img/16893554.jpg"/>
        <span>管理员</span>
        <span class="el-icon-caret-bottom"></span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="dropdown-list">
          <a href="javascript:" class="dropdown-btn" @click="user_click(0)">
            <i class="icon fa fa-user"></i>
            <span>个人信息</span>
          </a>
        </el-dropdown-item>
        <el-dropdown-item class="dropdown-list">
          <a href="javascript:" class="dropdown-btn" @click="user_click(0)">
            <i class="icon fa fa-cog"></i>
            <span>设置</span>
          </a>
        </el-dropdown-item>
        <el-dropdown-item class="dropdown-list">
          <a href="javascript:" class="dropdown-btn" @click="user_click(0)">
            <i class="icon fa fa-sign-out"></i>
            <span>安全退出</span>
          </a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {

    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headerSection{
    width:100%;
    height: 50px;
    background:blue;
  }
  .notification-list{
    float: right;
    margin-right: 10px;
  }
  .notification-btn{
    cursor: pointer;
    padding: 15px 20px;
    color: #ffffff;

  }
  .notification-btn img{
    margin-right: 10px;
    width: 20px;
    height: 20px;
    color: #fff;
  }

</style>
