<template>
  <div class="edit">
    <myheader title="编辑信息">
      <van-icon name="arrow-left" slot="left" @click="$router.back()" />
    </myheader>
    <label for="img">
      <van-image
        round
        width="100/360*100vw"
        height="100/360*100vw"
        :src="'http://127.0.0.1:3000'+user.head_img"
      />
    </label>
    <van-uploader :after-read="afterRead" id="img" />
    <myrow left="昵称" :right="user.nickname"></myrow>
    <myrow left="密码" :right="user.password"></myrow>

    <myrow left="性别" :right="user.gender===0?'女':'男'"></myrow>

    <myrow left="设置"></myrow>
  </div>
</template>

<script>
import myheader from '@/components/header.vue';
import myrow from '@/components/myrow.vue';
import { user } from '@/apis/user.js';
export default {
  data() {
    return {
      user: {}
    };
  },
  components: {
    myheader,
    myrow
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  },
  async mounted() {
    let res = await user(JSON.parse(localStorage.getItem('user')).id);
    // console.log(res);
    this.user = res.data.data;
  }
};
</script>

<style lang='less' scoped>
/deep/.van-uploader__upload {
  display: none;
}
/deep/ .van-image__img {
  width: 100/360 * 100vw;
  height: 100/360 * 100vw;
  margin: 0 auto;
}
/deep/ .van-image--round {
  // margin: 0 auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
}
</style>
