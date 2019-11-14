<template>
    <div class="main">
        <el-container>
            <el-header>
                <span class="title">xxx管理系统</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{user}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <!-- <el-dropdown-item @command.native="outLogin">退出</el-dropdown-item> -->
                    <el-dropdown-item @click.native="outLogin">退出登录</el-dropdown-item>

                </el-dropdown-menu>
            </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="230px">
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                        </template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航二</span>
                        </template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航三</span>
                        </template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user:''
            }
        },
        created() {
            this.user = localStorage.getItem('name')
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            // outLogin() {
            //     this.$router.push({path:'./login'})
            // }
               outLogin() {
                this.$router.push({path: '/login'})
                }
        }
    }
</script>

<style>
.main {
    min-height: 100vh;
}
.is-vertical {
    min-height: 100vh;
} 
/* .el-header {
    line-height: 60px;
    display: flex;
    justify-content: space-between;
} */
  .el-header {
    display: flex;
    justify-content: space-between;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>