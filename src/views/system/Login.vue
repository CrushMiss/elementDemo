<template>
  <div class="bg">
    <el-card class="card" >
      <img src="@/assets/loginImages/login_box_bg.png" class="login_box_bg">
      <img src="@/assets/loginImages/login_front_bg.png" class="login_front_bg">
      <div class="login_box">
        <!--        <img class="icon" src="@/assets/logo.png">-->
        <h1>ZNV</h1>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login_form">
            <el-form-item prop="userName">
              <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="请输入用户名" class="username" >
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码" class="password">
              </el-input>
            </el-form-item>
        </el-form>
        <el-button
            class="submit"
            type="primary"
            @click="handleSubmit('loginForm')"
        >
          登录
        </el-button>
      </div >
    </el-card>
  </div>
</template>

<script>
import {postRequest} from "../../api/api";
import md5 from 'js-md5'

export default {
  name: 'Login',

  data(){
    return {
      loginForm: {userName: '',password: ''},
      loginRules: {
        userName: [
          { required: true, trigger: 'blur', message: '用户名不能为空' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' }
        ],
      }
    }
  },

  created(){
    this.keyDown()
  },

  methods: {
    keyDown() {
      document.onkeydown = e => {
        if(e.keyCode === 13) {
          this.handleSubmit('loginForm')
        }
      }
    },
    handleSubmit(name) {
      let loginForm = {
        userName: this.loginForm.userName,
        password: md5(this.loginForm.password),
      };

      console.log(loginForm);

      this.$refs[name].validate((valid) => {
        if (valid) {
          postRequest('api/login',loginForm).then(res=>{
                console.log(res);
                if(res) {
                  console.log('login succcess');
                  // window.sessionStorage.setItem('token', 'logined')
                    this.$cookies.set('token', 'logined',0);
                    this.$router.push({path: '/home'});
                }
                else {
                  console.log('login fail');
                }
          }).catch(error=>{
              console.log(error);
              console.log('login fail');
          });

        } else {
          console.log('login fail')
        }
      });
    },

  }

}

</script>

<style scoped>

html {
  background-color: whitesmoke;
}

.bg{
  position: relative;
  width: 100%;
  height: 100%;
  background:url("../../assets/loginImages/bg.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.card {
  padding: 0;
  margin: 0;
  position: absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  height: 95%;
  width: 69%;
  background: rgba(0,0,0,0);
  border: 0;
  box-shadow: none;
}

.login_box_bg {
  margin: 0;
  padding: 0;position: absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  height: 100%;
  width: 100%;
}

.login_front_bg {
  margin: 0;
  padding: 0;
  position: absolute;
  top:69%;
  left: 52%;
  transform: translateX(-50%) translateY(-50%) scaleX(1.45) scaleY(1.1);
  height: 82%;
  width: 82%;
}

.login_box {
  padding: 0;
  margin: 0;
  position: absolute;
  left: 58%;
  top: 25%;
  width: 35%;
  height: 80%;
  /*background: #42b983;*/
  border: 0;
  box-shadow: none;
}

.login_form{
  width: 67%;
  margin: 0 auto;
}

/deep/.el-input__inner {
  padding: 0px 40px;;
  border: 0;
  border-radius: 0;
  border-bottom: silver solid 1px;
  /*width: 76%;*/
}
.username /deep/.el-input__inner {
  background:url('../../assets/loginImages/login_user.png') no-repeat  left;
   background-size: 20px 20px;
}
.password /deep/.el-input__inner {
  background:url('../../assets/loginImages/login_password.png') no-repeat  left;
  background-size: 20px 20px;
}

.submit {
  margin: 10px;
  margin-top:65px;
  width: 355px;
  height: 60px;
  border-radius: 50px;
  font-size: 20px;
  background-image: linear-gradient(to right,#57bcfe,#1790fb);
}

</style>


