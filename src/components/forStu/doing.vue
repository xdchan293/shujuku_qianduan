<template>
  <el-card class="card">
    <div class="doingBox">
     
     <el-row :gutter="20" style="margin-bottom:30px">
       <el-col :span="7">
        <div class="doing_header"> 
            <el-input 
            placeholder="输入查询的学号" 
            class="input-with-select"
            v-model="queryInfo.studentId"
            >
           
           <el-button 
           slot="append" 
           icon="el-icon-search"
           class="search_btn"
           @click="search"
           ></el-button>
         </el-input>
     </div></el-col>
       
       <el-col :span="6"></el-col>
     </el-row>
     <!-- <div class="mid_table">
        
     </div> -->
     <el-table :data="datalist" border stripe >
            <!-- 数据列 -->
            
            <el-table-column  label="申请时间" prop="createdDatetime"></el-table-column>
            <el-table-column  label="姓名" prop="studentName"></el-table-column>
            <el-table-column  label="学号" prop="studentId"></el-table-column>
            <el-table-column  label="专业" prop="majorName"></el-table-column>
            <el-table-column  label="步骤" prop="step" ></el-table-column>
            
           
            <el-table-column  label="操作" >

            <template  slot-scope="scope">
               <el-button  size="mini"  @click="editItemByid(scope.row)">删除</el-button>
               <!-- <el-button  size="mini" type="danger" @click="delItemByid(scope.row)">删除</el-button> -->
               
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

           <!-- <el-dialog
            title="详情"
            :visible.sync="editDiaVisible"
            width="60%"
            class=""
            >
            
            <el-form 
             :model="editForm">

             <el-form-item label="姓名" class="input_item">
              <el-input 
               style="width:220px"
               v-model="editForm.studentName"
               autocomplete="off"
               clearable
               disabled
               ></el-input>
             </el-form-item>

             <el-form-item label="学号" class="input_item">
              <el-input 
               style="width:220px"
               v-model="editForm.studentId"
               autocomplete="off"
               clearable
               disabled
               ></el-input>
             </el-form-item>

             <el-form-item label="时间" class="input_item">
        <el-date-picker
          v-model="editForm.eventBegins"
          align="right"
          type="date"
          placeholder="开始日期"
          
          class="time_pick"
          value-format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>

        <el-date-picker
          v-model="editForm.eventEnds"
          align="left"
          type="date"
          placeholder="结束日期"
          
          class="time_pick"
          value-format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>
     
        </el-form-item>

        <el-form-item label="目前方位" class="input_item">
        <el-radio-group 
        v-model="editForm.location" 
        size="mini"
        style="margin-left:20px;"
        >
          <el-radio :label="0">校内</el-radio>
          <el-radio :label="1">校外</el-radio>
          
        </el-radio-group>
          </el-form-item> 
 
        <el-form-item label="去向" class="input_item">
        <el-radio-group 
        v-model="editForm.eventArea" 
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
         
          v-model="editForm.eventLocation"
          autocomplete="off"
          clearable
          style="width:500px"
          ></el-input>
          </el-form-item> 
        
          
   
           <el-form-item label="申请理由" class="input_item">
          <el-input 
          
           v-model="editForm.eventNote"
           autocomplete="off"
           clearable
           :autosize="{ minRows: 2, maxRows: 5}"
           type="textarea"
           maxlength="250"
           resize="none"
           style="width:500px"
           ></el-input>
         </el-form-item> 
     


      </el-form>

            <span slot="footer" class="dialog-footer">
              <el-button @click="del">删除</el-button>
              <el-button type="primary" @click="change">修改</el-button>
            </span>
          </el-dialog> -->
  </div>
  
  </el-card>
</template>

<script>

export default {
 data() {
  return {
    status: true,
    datalist:[
      
    ],
    queryInfo: {
                studentId:'',
                //当前页数
                pageNo: 1,
                //一页多少条数据 最多八个
                pageSize: 8
            },
     editForm:{},
      editDiaVisible:false
  }
 },
 created() {
  this.getDataList()
 },
 methods: {
  async getDataList() {
     
     
      const res = await this.$http.get('/events/getEventsAllInfoPage',{
        params: this.queryInfo
      })
      // console.log(res.data.data.records)
      let temp =  res.data.data.records
      let tem = []
      temp.forEach((item,index) => {
         let temp_str = '事件已取消'
        switch(item.eventStatus){
          case '1':  temp_str = '等待辅导员审批' 
          break
          case '2': temp_str = '审批通过' 
          break
          case '3':  temp_str = '等待学院领导审批' 
          break
          case '4': temp_str = '审批通过' 
          break
          case '5': temp_str = '辅导员拒绝审批' 
          break
          case '6': temp_str = '学院领导拒绝审批' 
          break
        }
        // console.log(temp_str)
        let tem_obj = {
          step:temp_str
        }
        
        tem[index]= {...item,...tem_obj}
        
      });
      
      this.datalist =tem
      // this.datalist = res.data.data.records
      console.log(this.datalist)
    },
   
    //分页部分，当前页面重新发请求
    handleCurrentChange(newPage) {
      this.queryInfo.pageNo = newPage
      //todo 重新再请求一次
      this.getDataList()
    },
    async editItemByid(item) {
      console.log(item)
      if (item.eventStatus !== '1') {
        return this.$message.error("该事件不能删除")
      }
      const confirmResult = await this.$confirm(
              '该操作将删除这个审批，是否继续？',
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
       let temp = item
       temp.eventStatus = '0'
       const {data:res} = await this.$http.post('events/updateEvents',temp)
      //  console.log(res)
      if(res.code !== 200) {
        return this.$message.error("删除失败")
      }
      this.$message.success("删除成功")
      this.getDataList()
    },

    handleCurrentChange(newPage) {
    this.queryInfo.pageNo = newPage
    //todo 重新再请求一次
    this.getDataList()
  },
  search() {
    this.getDataList()
  },
  del() {

  },
  change() {

  }

 }
}
</script>

<style lang="less" scoped>
.card{
  height: 600px;
  width: 1200px;
  margin-top: 10px;
  margin-left: 100px;
}
.doingBox {
  height: 100%;
}
.doing_header {
  .el-button{
    background-color: #059490 !important;
    color: #ffffff !important;
    border-radius: 0;
   
  }
  // .el-button:hover{
  //   background-color: #059490;
  // }
  .el-form-item__content {
    margin-left: 0px !important;
    
  }
  

}
// .search_btn {
//   background-color: #059490;
// }
.el-table th.gutter{
  display: table-cell!important;
}

.el-button{
  background-color: #059490 !important;
    color: #ffffff !important;
    border-radius: 0;
    
    font-weight: 700;
  }
</style>