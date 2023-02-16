<template>
  <el-card class="card">
    <div class="addForm">
    <!-- 做一个表单 -->
    <el-form 
     label-width="100px"
     style="width:80%"
     :model="addForm"
     class="add_form">
      <el-form-item label="姓名" class="input_item">
       <el-input 
       :disabled="false"
        v-model="addForm.studentName"
        autocomplete="off"
        clearable
        style="width:300px"
        ></el-input>
      </el-form-item>

      <el-form-item label="学号" class="input_item">
       <el-input 
       :disabled="false"
        v-model="addForm.studentId"
        autocomplete="off"
        clearable
        style="width:300px"
        ></el-input>
      </el-form-item>

      <el-form-item label="时间" class="input_item">
        <el-date-picker
          v-model="addForm.eventBegins"
          align="right"
          type="date"
          placeholder="开始日期"
          
          class="time_pick"
          value-format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>

        <el-date-picker
          v-model="addForm.eventEnds"
          align="left"
          type="date"
          placeholder="结束日期"
          
          class="time_pick"
          value-format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>
     
        </el-form-item>

        <el-form-item label="目前方位" class="input_item">
        <el-radio-group 
        v-model="addForm.location" 
        size="mini"
        style="margin-left:20px;"
        >
          <el-radio :label="0">校内</el-radio>
          <el-radio :label="1">校外</el-radio>
          
        </el-radio-group>
          </el-form-item> 
 
        <el-form-item label="去向" class="input_item">
        <el-radio-group 
        v-model="addForm.eventArea" 
        size="mini"
        style="margin-left:20px;"
        >
          <el-radio :label="1">离校</el-radio>
          <el-radio :label="2">出市</el-radio>
          <el-radio :label="3">出省</el-radio>
        </el-radio-group>
          </el-form-item> 

       <el-form-item label="目的地" class="input_item">
      <el-input 
      
       v-model="addForm.eventLocation"
       autocomplete="off"
       clearable
       style="width:500px"
       ></el-input>
       </el-form-item> 
     
       

        <el-form-item label="申请理由" class="input_item">
       <el-input 
       
        v-model="addForm.eventNote"
        autocomplete="off"
        clearable
        :autosize="{ minRows: 2, maxRows: 5}"
        type="textarea"
        maxlength="250"
        resize="none"
        style="width:500px"
        ></el-input>
      </el-form-item> 

       <!-- todo：添加点击登录事件 -->
      
     </el-form>
     
  </div>
  <div class="btns">
      <el-button
            type="primary"
            round
            @click="add"
            class="login_btns"
            style="font-size: 25px"
            >提交</el-button
          >
     </div>
  </el-card>
</template>

<script>
let moment = require("moment")

export default {
data() {
  return {
    studentInfo: {
      name: '陈晓东',
      studentId: '2020101611',
      deptId:'', //辅导员id
      schoolId:'' //学院id
    },
    
    addForm: {
      studentName: '',
      studentId: '',
      eventBegins:'',
      eventEnds:'',
      eventArea:'',
      eventLocation:'',
      eventNote:'',
      location:''

    }
  }
},
methods: {
 async add() {
     const {data:res1} = await this.$http.get('/student/getStudent',{
      params: {
        studentId: this.addForm.studentId,

      }
     })
     console.log(res1.data)
     let req = {
      studentId:this.addForm.studentId,
      deptId:res1.data.deptId,
      majorId:res1.data.majorId,
      schoolId:res1.data.schoolId,
      eventBegins:this.addForm.eventBegins,
      eventEnds:this.addForm.eventEnds,
      eventArea:this.addForm.eventArea,
      location:this.addForm.location,
      eventLocation:this.addForm.eventLocation,
      eventNote:this.addForm.eventNote

     }
     console.log(req)
     let time = new Date()
     
    //  console.log(moment(time).format('YYYY-MM-DD HH:mm:ss'))
     const {data:res2} = await this.$http.post('events/createEvents',{
      studentId:this.addForm.studentId,
      deptId:res1.data.deptId,
      majorId:res1.data.majorId,
      schoolId:res1.data.schoolId,
      eventBegins:this.addForm.eventBegins,
      eventEnds:this.addForm.eventEnds,
      eventArea:this.addForm.eventArea,
      location:this.addForm.location,
      eventLocation:this.addForm.eventLocation,
      eventNote:this.addForm.eventNote,
      createdDatetime:moment(time).format('YYYY-MM-DD HH:mm:ss'),
      eventStatus:'1'

     })
     console.log(res2)
     if(res2.code!==200)
   {
    return this.$message.error("提交失败")
   }
   this.$message.success("提交成功")
  },

  //
 
}
}
</script>

<style lang="less" scoped>
.card{
  height: 600px;
  width: 1000px;
  margin-top: 10px;
  margin-left: 250px;
}
.addForm {

  display: inline-block;
  position: relative;
  margin-top: 15px;
  width: 90%;
  height: 90%;
  // overflow: scroll;
}
.add_form {
  margin-top: 20px;
}
.time_pick {
  margin-left: 25px;
  
}
.time_pick:hover {
  cursor: pointer;
}

.btns {
  position: absolute;
  margin: 0;
  margin-top: 25px;
  margin-left: 10px;
  display: inline-block;
  justify-content: center;
  // width: 80%;
  // float:right;
  right: 20%;
  bottom: 15%;
  .el-button--primary {
    background-color: #059490;
    border-radius: 5px;
   
  }
  .el-button{
    width: 80px;
  }
  .el-button--primary:hover{
    background-color: #059490;
  }
  .el-form-item__content {
    margin-left: 0px !important;
    
  }
}
.login_btns{
    width: 100px!important;
    height: 60px;
    border-radius: 10px;
  }
    
</style>