<template>
  <div class="myrow">
      <span>{{left}}</span>
      <span @click="click">{{right}}<van-icon name="arrow" /></span>
  </div>
</template>

<script>
export default {
  props: ['left', 'right'],
  methods: {
    click() {
      this.$emit('click')
    }
  }
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
