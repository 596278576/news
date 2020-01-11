<template>
    <div class="edit">

        <myheader title="编辑信息">
            <van-icon name="arrow-left" slot="left" @click="$router.back()" />
        </myheader>
    </div>
</template>

<script>
import myheader from '@/components/header.vue'
export default {
  components: {
    myheader
  }
};
</script>

<style lang='less' scoped>

</style>
