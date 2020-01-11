<template>
  <div class="personal">
    <router-link to="/edit">
      <div class="profile">
        <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
        <img :src="'http://127.0.0.1:3000'+user.head_img" alt />
        <div class="profile-center">
          <div class="name">
            <span class="iconfont iconxingbienan"></span>{{user.nickname}}
          </div>
          <div class="time">{{user.create_date}}</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <myrow left='我的关注' right='关注的用户'></myrow>
    <myrow left='我的跟帖' right='跟帖/回复'></myrow>
    <myrow left='我的收藏' right='文章/视频'></myrow>
    <router-link to='/'><van-button round type="info" size="large">首页</van-button></router-link>
    <van-button round type="info" size="large" @click="out">退出</van-button>
  </div>
</template>

<script>
import { user } from '@/apis/user.js'
import myrow from '@/components/myrow.vue'
export default {
  components: {
    myrow
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    out() {
      localStorage.removeItem('token')
      this.$router.push({ name: 'login' })
    }
  },
  async mounted() {
    let res = await user(JSON.parse(localStorage.getItem('user')).id)
    console.log(res);
    this.user = res.data.data
  }
}
</script>

<style lang='less' scoped>
/deep/ .van-button--large{
    width: 80%;
}
/deep/ .van-button{
    margin: 20px 20px;

}
.personal{
    width: 100vw;
    height: 100vh;
    background-color: #eee;
}
a{
    color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>
