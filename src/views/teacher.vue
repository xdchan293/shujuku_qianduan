<template>
    <el-container class="god_container">
      <!-- 页面头部 -->
      <el-header class="god_header">
         <div>
            <img class="logo_pic" src="../assets/pic/newjnulogo.png" alt=""/>
            <span class="title">老师 你好</span>
            <div class="header_btn">
              <el-button 
            type="primary"
            size="mini"
            @click="goback()">退出超级后台</el-button>
            </div>
         </div>
      </el-header>
  
       <el-container >
          <el-aside  class="leader_aside">
        <!-- <el-menu
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
        </el-menu> -->
        <el-input 
            placeholder="请输入辅导员工号" 
            class="input-with-select aside_input"
            v-model="searchItem"
            >
           
           <el-button 
           slot="append" 
           icon="el-icon-search"
           class="search_btn"
           @click="search"
           ></el-button>
         </el-input>
      </el-aside>
  
      <el-main class="table">
         <!-- <router-view></router-view> -->
      
         <el-card class="leader_card" :data="datalist" border stripe>
           <el-table :data="datalist" border stripe>
            <el-table-column  label="申请时间" prop="createdDatetime"></el-table-column>
            <el-table-column  label="学生姓名" prop="studentName"></el-table-column>
            <el-table-column  label="学号" prop="studentId"></el-table-column>
            
            <el-table-column  label="学院名" prop="schoolName"></el-table-column>

            <el-table-column  label="操作" width="180px">
            
            <template  slot-scope="scope">
               <el-button  size="mini" type="primary" icon="el-icon-edit" @click="editItemByid(scope.row)">详情</el-button>
               
            </template>
            </el-table-column>
           </el-table>
           <el-pagination
             style="margin-top:20px"
             @current-change="handleCurrentChange"
             :current-page.sync="queryInfo.pageNo"
             :page-size="10"
             layout="prev, pager, next, jumper"
             :total="1000">
           </el-pagination>
         </el-card>
        </el-main>
       </el-container>
<!-- 可以的话这里后续改成别的，不要input -->
       <el-dialog
      title="详情"
      :visible.sync="editDiaVisible"
      width="60%"
      class=""
      >
      
      <p> <b>姓名：</b>{{editForm.studentName}}</p>
      <p><b>学号：</b>{{editForm.studentId}}</p>
      <p><b>系：</b>{{editForm.deptName}}</p>
      <p><b>专业：</b>{{editForm.majorName}}</p>
      <p><b>开始时间-结束时间：</b>{{(``+editForm.eventBegins+'至'+editForm.eventEnds)}}</p>
      <p><b>去向：</b>{{(editForm.eventArea)}}</p>
      <p><b>目前方位：</b>{{(editForm.location)}}</p>
      <p><b>去往地方：</b>{{(editForm.eventLocation)}}</p>
      <p><b>申请理由：</b>{{(editForm.eventNote)}}</p>

      <span slot="footer" class="dialog-footer">
        <el-button @click="refuse">拒绝</el-button>
        <el-button type="primary" @click="agree">同意</el-button>
      </span>
    </el-dialog>
   
    
     
    </el-container>
  </template>
  
  <script>
  // let moment = require("moment")
  export default {
  data() {
    return {
        datalist:[
      
      ],
    //   menu_item: [
    //     {
    //       path: 'college1',
    //       name: '学院'
    //     },
    //     {
    //       path: 'teacher1',
    //       name: '辅导员'
    //     },
    //     {
    //       path: 'student1',
    //       name: '学生'
    //     },
    //     {
    //       path: 'major1',
    //       name: '专业'
    //     }
    //   ],
      queryInfo: {
        deptId:'',
        eventStatus:'1',
            //  schoolName:'',
              //当前页数
              pageNo: 1,
              //一页多少条数据 最多八个
              pageSize: 8
          },
      searchItem:'' ,
      editForm:{},
      editDiaVisible:false
    }
  },
  created() {
  //  this.getDataList()
  },
  methods:{
    goback () {
      this.$router.push("/login");
    },
    changePath(newPath) {
      // this.$router.push(newPath)
    },

    async getDataList() {
      let reqData = JSON.stringify(this.queryInfo)
      // console.log(reqData)
      // let req = {
      //   url:'43.156.3.86:8800/student/getStudentPage',
      //   body:this.queryInfo,
      //   methos
      // }
    //  let req = {
    //   studentId:'2020101600'
    //  }
     
      const res = await this.$http.get('events/getEventsAllInfoPage',{
        params: this.queryInfo
      })
      console.log(res.data.data.records)
      this.datalist = res.data.data.records
    },
    async search() {
      const {data:res} = await this.$http.get('teacher/getTeacherPage',{
      params: {
        teacherId:this.searchItem
      }
    })
    console.log(res.data.records[0])
    this.queryInfo.deptId = res.data.records[0].deptId
    this.getDataList()
    },
    editItemByid(item) {
        console.log(item)
        this.editForm = item
        // console.log(item.eventBegins.split(' ')[0])
        this.editForm.eventBegins = item.eventBegins.split(' ')[0]
        this.editForm.eventEnds = item.eventEnds.split(' ')[0]
        switch(item.eventArea) {
          case '1': this.editForm.eventArea = '离校'
          break
          case '2': this.editForm.eventArea = '出市'
          break
          case '3': this.editForm.eventArea = '出省'
          break
        }
        switch(item.location){
          case '0': this.editForm.location = '校内'
          break
          case '1': this.editForm.location = '校外'
          break
        }
        this.editDiaVisible =true
    },
   async refuse() {
    //deptConfimEvents
    const confirmResult = await this.$confirm(
              '该操作拒绝通过，是否继续？',
              '提示',
              {
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
  
              }
          ).catch(err => err)
  
          ///用户取消了该操作
          if(confirmResult !== 'confirm'){
              return this.$message.info('已取消')
          }
          //确认
       const {data:res} = await this.$http.get('events/deptConfimEvents', {
        params: {
          eventId: this.editForm.eventId,
          pass:'0'
        }
       })   
        if(res.code!==200)
       {
        return this.$message.error("审批失败")
       }
       this.$message.success("审批成功")
       this.editDiaVisible = false
       this.getDataList()
        
    
    },
    async  agree() {
       console.log(this.editForm)
       const confirmResult = await this.$confirm(
              '该操作审批通过，是否继续？',
              '提示',
              {
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
  
              }
          ).catch(err => err)
  
          ///用户取消了该操作
          if(confirmResult !== 'confirm'){
              return this.$message.info('已取消')
          }
       //确认
       const {data:res} = await this.$http.get('events/deptConfimEvents', {
        params: {
          eventId: this.editForm.eventId,
          pass:'1'
        }
       })   
        if(res.code!==200)
       {
        return this.$message.error("审批失败")
       }
       this.$message.success("审批成功")
       this.editDiaVisible = false
       this.getDataList()
        },
   handleCurrentChange(newPage) {
    this.queryInfo.pageNo = newPage
    //todo 重新再请求一次
    this.getDataList()
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
      background-color: #059490!important;
      border-radius: 5px;
      color: #f3f3f3!important;
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

.leader_card {
    height: 650px;
    width: 1000px;
}
.leader_aside {
   width: 400px;
   padding: 20px 20px;
    .el-button{
    background-color: #059490 !important;
    border-radius: 0;
    color: #ffffff !important;
    font-weight: 700;
  }
  .header_btn{
    .el-button--default {
    background-color: #059490 !important;
    border-radius: 0;
    color: #ffffff !important;
    font-weight: 700;
  }
  }
}
  </style>