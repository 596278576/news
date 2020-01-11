<template>
  <div id="app">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <van-field
          v-model="user.username"
          placeholder="请输入用户名"
          @input="verifyUsername"
          :class="{red:isred}"
        />
        <van-field
          v-model="user.password"
          placeholder="密码"
          type="password"
          @input="verifyPwd"
          :class="{red:isred2}"
        />
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <van-button round type="info" @click="info">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/apis/user.js';
export default {
  components: {},
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      isred: false,
      isred2: false
    };
  },
  methods: {
    verifyUsername() {
      if (!/^(\d{5,6})$|^(1\d{10})$/.test(this.user.username)) {
        this.isred = true;
      } else {
        this.isred = false;
      }
    },
    verifyPwd() {
      if (!/^\S{3,16}$/.test(this.user.password)) {
        this.isred2 = true;
      } else {
        this.isred2 = false;
      }
    },
    async info() {
      if (
        /^(\d{5,6})$|^(1\d{10})$/.test(this.user.username) &&
        /^\S{3,16}$/.test(this.user.password)
      ) {
        let res = await login(this.user);
        console.log(res);
        this.$toast(res.data.message);
        if (res.data.message === '登录成功') {
          localStorage.setItem('token', res.data.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.data.user));
          this.$router.push({ name: 'personal' })
        }
      } else {
        this.$toast('用户名或者密码格式不对');
      }
    }
  }
};
</script>

<style lang='less' scoped>
.red {
  border-bottom: 1px solid #f00;
}
/deep/ .van-button--info {
  width: 90%;
  margin: 0 auto;
}

/deep/ .van-field__control {
  border-bottom: 1px solid #ccc;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
}
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
