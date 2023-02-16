<template>
    <el-container class="god_container">
      <!-- 页面头部 -->
      <el-header class="god_header">
         <div>
            <img class="logo_pic" src="../assets/pic/newjnulogo.png" alt=""/>
            <span class="title">超级管理后台</span>
            <div class="header_btn">
              <el-button 
            type="primary"
            size="mini"
            @click="goback()">退出超级后台</el-button>
            </div>
         </div>
      </el-header>
  
       <el-container >
          <el-aside width="200px">
        <el-menu
        :unique-opened="true"
            :collapse-transition="false"
        router
        background-color="#f3f3f3">
          <el-menu-item 
          :index= " '/' + item.path"
          v-for="item in menu_item" 
          :key= "item.path"
          @click="changePath('/'+item.path)">
            <template slot="title">
                 
                <span>{{item.name}}</span>
              </template>
          </el-menu-item>
        </el-menu>
       
      </el-aside>
  
      <el-main>
         <router-view></router-view>
      </el-main>
       </el-container>
    </el-container>
  </template>
  
  <script>
  export default {
  data() {
    return {
      menu_item: [
        {
          path: 'college1',
          name: '学院'
        },
        {
          path: 'teacher1',
          name: '辅导员'
        },
        {
          path: 'student1',
          name: '学生'
        },
        {
          path: 'major1',
          name: '专业'
        }
      ]
    }
  },
  methods:{
    goback () {
      this.$router.push("/login");
    },
    changePath(newPath) {
      // this.$router.push(newPath)
    },
    
  }
  }
  </script>
  
  <style lang="less" scoped>
  .god_container {
    height: 100%;
  }
  .god_header{
      background-color: #f3f3f3;
      
  }
  .el-header {
      height: 62px!important;
  }
  .logo_pic{
      float: left;
      height: 60px;
      width: 60px;
      margin-top: 0px;
      // margin-left: 5px;
      // background-color: #f3f3f3;
      // opacity: 0.7;
  }
  
  .title{
      font-size: 32px;
      color: #373737;
      margin-top: 8px!important;
      float: left;
      margin-left: 10px;
  }
  .header_btn{
      margin-top: 17px;
      float: right;
      justify-content: center;
  }
  .el-button--primary {
      background-color: #059490;
      border-radius: 5px;
     
    }
    .el-button--primary:hover{
      background-color: #059490;
    }
  
  .el-aside{
      // overflow:visible;
      // height: 100vh;
      // overflow-y: scroll;
      background-color: #f3f3f3;
  }
  </style>