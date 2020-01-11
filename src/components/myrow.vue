<template>
  <div class="myrow">
      <span>{{left}}</span>
      <span>{{right}}</span>
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
}
</style>
