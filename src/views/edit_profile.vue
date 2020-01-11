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
    <myrow left="昵称" :right="user.nickname" @click="show1=!show1"></myrow>
    <!-- 修改昵称弹框 -->
    <van-dialog v-model="show1" title="修改昵称" show-cancel-button @confirm="upnickname">
      <van-field :value="user.nickname" placeholder="请输入昵称" ref="nick" />
    </van-dialog>

    <myrow left="密码" :right="user.password" @click="show2=!show2"></myrow>
    <!-- 修改密码 -->
    <van-dialog v-model="show2" title="修改密码" show-cancel-button @confirm="uppwd" :before-close='beforeclose'>
      <van-field  placeholder="请输入原密码" ref="oldpwd" />
      <van-field  placeholder="请输入新密码" ref="newpwd" />
    </van-dialog>

    <myrow left="性别" :right="user.gender===0?'女':'男'" @click="show3=!show3"></myrow>
    <!-- 修改性别 -->
        <van-dialog v-model="show3" title="修改性别" show-cancel-button @confirm="upgender" >
            <van-picker :columns="['女','男']" @change="onChange"
            :default-index="user.gender" />
    </van-dialog>

    <myrow left="设置"></myrow>
  </div>
</template>

<script>
import myheader from '@/components/header.vue';
import myrow from '@/components/myrow.vue';
import { user, userupdate } from '@/apis/user.js';
import { upload } from '@/apis/file.js';
export default {
  data() {
    return {
      user: {},
      show1: false,
      show2: false,
      show3: false,
      gender: ''
    };
  },
  components: {
    myheader,
    myrow
  },
  methods: {
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      //   console.log(file);
      let fd = new FormData();
      fd.append('file', file.file);
      let res = await upload(fd);
      //   console.log(res);
      if (res.data.message === '文件上传成功') {
        let res2 = await userupdate(this.user.id, {
          head_img: res.data.data.url
        });
        // console.log(res2);
        this.$toast(res2.data.message);
        if (res2.data.message === '修改成功') {
          this.user.head_img = res2.data.data.head_img;
        }
      }
    },
    async upnickname() {
      //   console.log(this.$refs.nick.$refs.input.value);
      let res = await userupdate(this.user.id, {
        nickname: this.$refs.nick.$refs.input.value
      });
      console.log(res);
      this.$toast(res.data.message);
      if (res.data.message === '修改成功') {
        this.user.nickname = res.data.data.nickname;
      }
    },
    async beforeclose(action, done) {
      let old = this.$refs.oldpwd.$refs.input.value
      let n = this.$refs.newpwd.$refs.input.value
      if (action === 'confirm') {
        if (old !== this.user.password) {
          this.$toast.fail('原密码错误')
          this.$refs.oldpwd.$refs.input.focus()
          done(false)
        } else if (!/\w{3,16}/.test(n)) {
          this.$toast.fail('新密码格式正确')
          done(false)
        } else {
          let res = await userupdate(this.user.id, { password: n })
          //   console.log(res);
          this.$toast(res.data.message)
          if (res.data.message === '修改成功') {
            this.$router.push({ name: 'login' })
          }
          done()
        }
      } else {
        done()
      }
    },
    async uppwd() {

    },
    async upgender() {
      let res = await userupdate(this.user.id, { gender: this.gender })

      this.$toast(res.data.message)
      //   this.user.gender = this.gender
      this.user.gender = this.gender
    },
    onChange(picker, value, index) {
    //   Toast(`当前值：${value}, 当前索引：${index}`);
      this.gender = index
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
