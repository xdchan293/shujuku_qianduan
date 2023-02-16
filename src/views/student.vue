<template>
   <el-container class="student_container">
    <el-header class="student_header">
       <div>
          <img class="logo_pic" src="../assets/pic/newjnulogo.png" alt=""/>
          <span class="title">人下人审批页面</span>

          <div class="menu" 
          style=""
           >
            <el-menu 
            default-active="2" 
            class="el-menu-demo" 
            mode="horizontal"
            background-color="#f3f3f3" 
            router>
            <!-- <el-menu-item index="1">添加审批</el-menu-item>
            <el-menu-item index="2">正在进行</el-menu-item>
            <el-menu-item index="3">待确认</el-menu-item>
            
            
            <el-menu-item index="4"></el-menu-item> -->
            <el-menu-item 
            :index= " '/' + item.path"
             v-for="item in menu_item" 
             :key= "item.path"
             >
                <template slot="title">
                    
                   <span>{{item.name}}</span>
                 </template>
             </el-menu-item>

          </el-menu>
          </div>

          <!-- <div class="menu">
             <div class="menu_item">
               添加审批
             </div>
             
             <div class="menu_item">
               正在进行 
             </div>

             <div class="menu_item">
               待确认
             </div>

             <div class="menu_item">
               历史审批
             </div>
          </div> -->

          <div class="header_btn">
            <el-button 
          type="primary"
          size="mini"
          @click="goback()">退出</el-button>
          </div>
       </div>
    </el-header>
    <el-main class="main_container">
       
         
      <router-view></router-view>
    </el-main>
  </el-container>
  </template>

<script>
export default {
data() {
   return {
    menu_item: [
      {
        path: 'AddIsuue',
        name: '添加审批'
      },
      {
        path: 'auditing',
        name: '正在进行'
      },
      // {
      //   path: 'todo',
      //   name: '待确认'
      // },
      // {
      //   path: 'done',
      //   name: '已完成'
      // }
    ]
   }
}
}
</script>

<style lang="less" scoped>
.student_container {
  height: 100%;
}

.student_header{
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
.menu {
  margin-left: 200px;
  display: inline-block ;
  height: 60px!important;
}
.menu_item{
   height: 60px!important;
   width: 100px!important;
   display: inline-block ;
   //字位置
   text-align:center;//水平居中
   line-height: 60px;
   font-size: 16px;
   margin-left: 16px;
}

.main_container{
  // position: relative;   
  background-color: #f3f3f3;
  opacity: 0.7;
  margin: 0;
}
.main_card{
  height: 600px;
  width: 1000px;
  margin-top: 10px;
  margin-left: 250px;
}
.main_box {
  // position: absolute; 
  height: 600px;
  width: 1000px;
  background-color: #ffffff;
  
  // transform: translate(-50%, -50%);  
  overflow-y: scroll;
  opacity: 1;
  font-weight: 700;
}
.el-card__body {
  height: 100%!important;
}
</style>