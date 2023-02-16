<template>
    <el-container class="god_container">
      <!-- 页面头部 -->
      <el-header class="god_header">
         <div>
            <img class="logo_pic" src="../assets/pic/newjnulogo.png" alt=""/>
            <span class="title">看看你的码</span>
            <div class="header_btn">
              <el-button 
            type="primary"
            size="mini"
            @click="goback()">退出</el-button>
            </div>
         </div>
      </el-header>
  
       <el-container >
          
  
      <el-main>
         <el-card class="card">
            <el-row :gutter="20" style="margin-bottom:30px" class="card_head">
         <el-col :span="7">
          <div class="doing_header"> 
              <el-input 
              placeholder="输入你的学号" 
              class="input-with-select"
              v-model="queryInfo.studentId"
              clearable>
             
             <el-button 
             slot="append" 
             icon="el-icon-search"
             class="search_btn"
             @click="search"
             ></el-button>
           </el-input>
          </div></el-col>
         
         
         
       </el-row>
         <div class="cord">
            <img src="../assets/pic/yes.png" alt="" v-if="info.data == '1'">
            <img src="../assets/pic/no.png" alt="" v-if="info.data == '0'">
            <p>{{info.studentName}}</p>
            <p>{{info.studentId}}</p>
            <p>{{info.schoolName}}</p>
            <p v-if="info.data == '1'"><b>允许通行</b></p>
            <p v-if="info.data == '0'"><b>不允通行</b></p>
         </div>
         </el-card>
      </el-main>
       </el-container>
    </el-container>
  </template>
  
  <script>
  export default {
  data() {
    return {
        queryInfo: {
        studentId:'2020101611'
      },
      info:{
        // src:''
        data:'0',
        studentName:'陈晓东',
        studentId:'2020101611',
        schoolName:'信息科学技术学院'
      }
    }
  },
  methods:{
    goback () {
      this.$router.push("/login");
    },
    changePath(newPath) {
      // this.$router.push(newPath)
    },
    async search() {
       const{data:res1} = await this.$http.get('student/getStudentPage',{
      params:this.queryInfo
    })
    // console.log(res1.data.records[0])
    const{data:res3} = await this.$http.get('major/getMajorPage',{
        params:{
            majorId:res1.data.records[0].majorId
        }
    })
    //  console.log(res3.data)
    const{data:res2} = await this.$http.get('stupass/getStupassStatus',{
      params:this.queryInfo
    })
    // console.log(res2)
    let temp = {
        data:res2.data+'',
        studentName:res1.data.records[0].studentName,
        studentId:res1.data.records[0].studentId,
        schoolName:res3.data.records[0].schoolName
    }
    this.info = temp
    }
  }
  }
  </script>
  
  <style lang="less" scoped>
  .doing_header {
    .el-button{
      background-color: #059490;
      border-radius: 0;
     
    }
    // .el-button:hover{
    //   background-color: #059490;
    // }
    .el-form-item__content {
      margin-left: 0px !important;
      
    }
    
    .el-button{
      background-color: #059490 !important;
      border-radius: 0;
      color: #ffffff !important;
      font-weight: 700;
    }
  }
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

  .card {
    height: 600px;
    width: 1000px;
    margin-top: 10px;
  margin-left: 250px;

  }
  .cord {
    width: 600px;
    margin-left: 250px;
    margin-top: 20px;
    font-size: 25px;
    img {
         height: 250px;
         width: 250px;
    }
  }
  </style>