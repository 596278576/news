<template>
  <div class="header">
      <slot name='left'></slot>
      <span>{{title}}</span>
      <slot name='right'></slot>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang='less' scoped>
.header{
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
    align-items: center;
    >span{
        margin: 0 auto;
    }
}

</style>
