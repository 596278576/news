<template>
    <div class="edit">

        <myheader title="编辑信息">
            <van-icon name="arrow-left" slot="left" @click="$router.back()" />
        </myheader>
        <myrow left='用户名' right='123'></myrow>
    </div>
</template>

<script>
import myheader from '@/components/header.vue'
import myrow from '@/components/myrow.vue'
export default {
  components: {
    myheader, myrow
  }
};
</script>

<style lang='less' scoped>

</style>
