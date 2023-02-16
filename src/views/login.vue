<template>
  <div class="login_container" style="" >
    <div  
    class="login_background"
    style="" >
      <img  src="https://icas.jnu.edu.cn/cas/comm/image/login_container_bg_01.jpg?1669109900082" alt="" />
      
    </div>
    <!-- 登录页面最上边 -->
    <div class="top_bar">
       
       <div class="logo">
        
       <img class="logo_pic" src="../assets/pic/newjnulogo.png" alt="">
        
        <span class="school_name">非必要不出校大学</span>
        <span class="line"></span>
        <span class="title">统一身份认证平台</span>
       </div>
      </div>
   
      <!-- 登录表单 -->
   <div class="login_box">
     <el-form 
     label-width="100px"
     :model="login_form"
     class="login_form">
      <el-form-item label="学工号" class="input_item">
       <el-input 
       
        v-model="login_form.user_id"
        autocomplete="off"
        clearable
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" class="input_item">
       <el-input 
       
        v-model="login_form.password"
        autocomplete="off"
        type="password" 
        clearable
        ></el-input>
      </el-form-item>
    
      <!-- todo：添加点击登录事件 -->
      <el-form-item class="btns">
          <el-button
            type="primary"
            round
            @click="login"
            class="login_btns"
            style="font-size: 17px"
            >登录</el-button
          >
        </el-form-item>
     </el-form>
   </div>
  </div>
</template>

<script>
export default {
data() {
    return {
       login_form: {
        user_id: '',
        password: ''
       }
    }
},
methods: {
  login() {
    
  }
}
}
</script>

<style lang="less" scoped>
.login_container{
    height: 100%; 
    width: 100%;
    min-height: 100%;
    position: fixed;
    height: auto;
    display: block;
}
.login_background{
    width: 100%!important;
    position: absolute; 
    z-index: -1;
    img{

    width: 100%;
    height: 50%;
    }
}
.top_bar .line .logo{
    float: left;
    margin-top: 25px;
}
.line{
    margin-top: 25px;
    height: 58px;
    border-left: 1px solid #3f3f3f;
    float: left;
    width: 20px;
    margin-left: 15px;
}
.top_bar{
    // position: relative;
    margin-left: 112px;
    height: 165px;
    
}
.logo_pic{
    float: left;
    height: 90px;
    width: 90px;
    margin-top: 5px;
    // margin-left: 5px;
    // background-color: #f3f3f3;
    // opacity: 0.7;
}
.school_name {
    font-size: 32px;
    color: #373737;
    margin-top: 30px!important;
    margin-left: 5px;
    float: left;
}

.title{
    font-size: 32px;
    color: #373737;
    margin-top: 30px!important;
    float: left;
}
.login_box{
    // top: calc((100% - 395px) * 0.5);
    top :250px ;
    height: 300px;
    width: 370px;
    background-color: #fefefe;
    position: fixed;
    right: 10%;
    padding-top: 20px;
    border-radius: 10px;
}
.login_form {
  position: flex;
//   margin-left: 5px;
  bottom: 0;
  width: 90%;
  padding: 20px 0px;
  box-sizing: border-box;
  .el-input__inner {
    border-radius: 10px;
  }
  
}

.btns {
  margin: 0;
  margin-top: 25px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  width: 80%;
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
    width: 285px!important;
    height: 45px;
    border-radius: 10px;}
.input_item{
    margin-top: 20px;
}
</style>