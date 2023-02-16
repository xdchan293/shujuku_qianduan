<template>
    <div class="student_main"> 
      <el-card>
        <el-row :gutter="20" style="margin-bottom:30px" class="card_head">
         <el-col :span="7">
          <div class="doing_header"> 
              <el-input 
              placeholder="请输入内容" 
              class="input-with-select">
             
             <el-button 
             slot="append" 
             icon="el-icon-search"
             class="search_btn"
             ></el-button>
           </el-input>
       </div></el-col>
         
         <el-col :span="4">
          <el-button 
          plain
             class="header_btn"
             @click="addDiaVisible = true"
             >
            添加
            </el-button>
         </el-col>
       </el-row>
       <!-- <div class="mid_table">
          
       </div> -->
       <!-- 待改 -->
       <el-table :data="datalist" border stripe>
              <!-- 数据列 -->
              
              <el-table-column  label="系名" prop="deptName"></el-table-column>
              <el-table-column  label="系id" prop="deptId" ></el-table-column>
              
              <el-table-column  label="学院id" prop="schoolId" ></el-table-column>
              <!-- <el-table-column  label="学院" prop="college" ></el-table-column> -->
              
             
              <el-table-column  label="操作" width="180px">
              
              <template  slot-scope="scope">
                 <el-button  size="mini" type="danger" icon="el-icon-delete" @click="delItemByid(scope.row)">删除</el-button>
                 
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
  
      <!-- 添加的对话框 -->
      <el-dialog
        title="添加系"
        :visible.sync="addDiaVisible"
        width="40%"
        >
        <el-form 
        :model="addForm">
        <el-form-item label="系名" class="input_item">
         <el-input 
          style="width:220px"
          v-model="addForm.deptName"
          autocomplete="off"
          clearable
          ></el-input>
        </el-form-item>
  
        <el-form-item label="学院名" class="input_item">
         <el-input 
          style="width:220px"
          v-model="addForm.schoolName"
          autocomplete="off"
          clearable
          ></el-input>
        </el-form-item>
  
  
  
        </el-form>
  
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDiaVisible = false">取 消</el-button>
          <el-button type="primary" @click="addItem">确 定</el-button>
        </span>
      </el-dialog>
  
  
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {  
      //表格渲染数据
      datalist:[
        
      ],
      //请求用的对象
      queryInfo: {
                
                //当前商品页数
                pageNo: 1,
                //一页多少条数据 最多八个
                pageSize: 8
            },
      addDiaVisible:false,
      addForm:{
        deptName:'',
        //学院名
        schoolName:'',
        
      }
    }
  },
  created() {
   this.getDataList()
  },
  methods: {
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
     
      const res = await this.$http.get('dept/getDeptPage',{
        params: this.queryInfo
      })
      // console.log(res)
      this.datalist = res.data.data.records
    },
   
    //分页部分，当前页面重新发请求
    handleCurrentChange(newPage) {
      this.queryInfo.pageNo = newPage
      //todo 重新再请求一次
      this.getDataList()
    },
   
    //添加
   async addItem() {
     //todo 发送添加请求
     //根据学院名查到学院id
     const {data:res1} = await this.$http.get('school/getSchoolBySchoolName', {
      params: {
        schoolName: this.addForm.schoolName
      }
     })
     console.log(res1.data.schoolId)

     const {data:res2} = await this.$http.post('dept/createDept',{
      schoolId: res1.data.schoolId,
      deptName:this.addForm.deptName
     })

     if(res2.code!==200)
     {
      return this.$message.error("添加失败")
     }
     this.$message.success("添加成功")
     this.getDataList()
     //然后把页面关闭
     this.addDiaVisible = false
    },
  
    //删除
   async delItemByid(item) {
      const confirmResult = await this.$confirm(
                '该操作将永久删除该学生，是否继续？',
                '提示',
                {
                  confirmButtonText:'确定',
                  cancelButtonText:'取消',
                  type:'warning'
    
                }
            ).catch(err => err)
    
            ///用户取消了该操作
            if(confirmResult !== 'confirm'){
                return this.$message.info('已取消删除')
            }
  
            //todo
            //确认的话就删除
      const {data:res} = await this.$http.get('/dept/deleteDept', {
        params: {
          deptId: item.deptId
        }
      })
       if(res.code!==200)
      {
       return this.$message.error("删除失败")
      }
      this.$message.success("删除成功")
      this.getDataList()
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
  .card_head {
    .el-button{
      background-color: #059490 !important;
      border-radius: 0;
      color: #ffffff !important;
      font-weight: 700;
    }
  }
  // .search_btn {
  //   background-color: #059490;
  // }
  .el-table th.gutter{
    display: table-cell!important;
  }
  
  
    // .el-button:hover {
    //   background-color: #059490 !important;
    //   color: #ffffff !important; 
    // }
   
  </style>>
  
  </style>                        