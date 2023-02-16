<template>
    <div class="student_main"> 
      <el-card>
        <el-row :gutter="20" style="margin-bottom:30px">
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
             >
            添加
            </el-button>
         </el-col>
       </el-row>
       <!-- <div class="mid_table">
          
       </div> -->
       <!-- 待改 -->
       <el-table :data="doing_list" border stripe>
              <!-- 数据列 -->
              
              <el-table-column  label="姓名" prop="time"></el-table-column>
              <el-table-column  label="学号" prop="step" ></el-table-column>
              <el-table-column  label="专业" prop="step" ></el-table-column>
              <el-table-column  label="辅导员" prop="step" ></el-table-column>
              <el-table-column  label="学院" prop="step" ></el-table-column>
              
             
              <!-- <el-table-column  label="操作" width="180px">
              
              <template  slot-scope="scope">
                 <el-button  size="mini" icon="el-icon-edit" @click="editItemByid(scope.row)">详情</el-button>
                 
              </template>
              </el-table-column> -->
          </el-table>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      student_list:[]
    }
  },
  created() {
  
  },
  methods: {
    
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
    
  
  }
  // .search_btn {
  //   background-color: #059490;
  // }
  .el-table th.gutter{
    display: table-cell!important;
  }
  
  .el-button{
      background-color: #059490 !important;
      border-radius: 0;
      color: #ffffff !important;
      font-weight: 700;
    }
    // .el-button:hover {
    //   background-color: #059490 !important;
    //   color: #ffffff !important; 
    // }
   
  </style>>
  
  </style>