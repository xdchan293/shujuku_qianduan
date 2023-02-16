<template>
  <div>
    <el-row :gutter="20">
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
       
       <el-col :span="6"></el-col>
     </el-row>
     <el-table :data="doing_list" border stripe>
            <!-- 数据列 -->
            
            <el-table-column  label="时间" prop="time"></el-table-column>
            <el-table-column  label="步骤" prop="step" ></el-table-column>
            
           
            <el-table-column  label="操作" width="180px">
       <!-- 操作的模板（按钮） -->
            <template  slot-scope="scope">
               <el-button  size="mini" icon="el-icon-edit" @click="editItemByid(scope.row)">详情</el-button>
               
            </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {

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
    background-color: #059490;
    border-radius: 0;
    color: #ffffff;
    font-weight: 700;
  }
  
</style>>

</style>