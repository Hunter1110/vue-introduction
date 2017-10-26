<template>
  <div id="app-4">
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.text">{{ todo.text }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { text: '学习 JavaScript' } ,
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    };
  }
}
</script>

<style>
#app-4 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

