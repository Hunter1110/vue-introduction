<template>
  <div id="app-3">
    <p v-if="seen">现在你看到我了</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true
    };
  }
}
</script>

<style>
#app-3 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
