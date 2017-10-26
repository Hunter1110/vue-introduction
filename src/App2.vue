<template>
  <div>
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息!
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '页面加载于' + new Date().toLocaleString()
    };
  }
}
</script>

<style>
#app-2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

