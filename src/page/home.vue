<template>
    <div>
      
        <el-container  style="min-height:800px; border: 1px solid #eee">
        <el-aside width="200px">
            <el-row class="tac">
                <el-col :span="24">
                    <h5 class="headimg"><img src="../static/images/ww.jpg"></h5>
                    <el-menu 
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>内容管理</span>
                        </template>
                        
                        <el-menu-item-group>
                        
                        <el-menu-item index="1-1"><router-link class="muen" to="/home">文章列表</router-link></el-menu-item>
                        <el-menu-item index="1-2"><router-link class="muen" to="/add">文章添加</router-link></el-menu-item>
                        <el-menu-item index="1-2"><router-link class="muen" to="/category">分类管理</router-link></el-menu-item>
                        <el-menu-item index="1-2"><router-link class="muen" to="/tags">标签管理</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                     <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>系统设置</span>
                        </template>
                        
                        <el-menu-item-group>
                            <el-menu-item index="3-1"><router-link class="muen" to="/manager">管理员管理</router-link></el-menu-item>
                            <el-menu-item index="3-2"><router-link class="muen" to="/role">角色管理</router-link></el-menu-item>
                            <el-menu-item index="3-3"><router-link class="muen" to="/rbac">角色权限管理</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>项目</span>
                        </template>
                        
                        <el-menu-item-group>
                            <el-menu-item index="4-1"><router-link class="muen" to="/statistical">项目统计</router-link></el-menu-item>
                            <el-menu-item index="4-2"><router-link class="muen" to="/workbench">工作台</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>统计数据</span>
                        </template>
                        
                        <el-menu-item-group>
                            <el-menu-item index="2-1"><router-link class="muen" to="/info">网站信息</router-link></el-menu-item>
                            <el-menu-item index="2-2"><router-link class="muen" to="/trend">数据趋势</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    
                    </el-menu>
                </el-col>
            </el-row>
           
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main> <router-view></router-view> </el-main>
          
        </el-container>
    </el-container>
    </div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>


<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #e6e6e6;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding:0;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .headimg{
      height: 110px;
      line-height: 110px;
      background: #fff;
      padding: 20px 0;
  }

  .headimg img{
      width:100px;
      border-radius:100px;
  }
  .muen{
      display: inline-block;
      width: 100%;
  }
  .commonmain{
      background:#fff;
      margin:20px;
      padding-bottom: 30px;
  }
</style>

