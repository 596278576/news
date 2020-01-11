<template>
  <div class="column">
    <myheader title="栏目管理">
      <van-icon name="arrow-left" slot="left" @click="$router.back()" />
    </myheader>
    <div class="box">
      <h2>删除栏目</h2>
      <div class="span">
        <span>栏目1</span>
      </div>
    </div>
    <div class="box">
      <h2>增加栏目</h2>
      <div class="span">
        <span>栏目1</span>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from '@/components/header.vue';
import { category } from '@/apis/column.js'
export default {
  components: {
    myheader
  },
  async mounted() {
    let res = await category()
    console.log(res);
  }
};
</script>

<style lang='less' scoped>
.span{
    display: flex;
    justify-content: space-around;
    span{
        padding: 10px;
        border: 1px solid #ccc;
    }
}
</style>
