<template>
  <div class="myrow">
      <span>{{left}}</span>
      <span>{{right}}<van-icon name="arrow" /></span>
  </div>
</template>

<script>
export default {
  props: ['left', 'right']
}
</script>

<style lang='less' scoped>
.myrow{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
</style>
