<template>
  <div id="app-7">
    <ol>
      <TodoItem v-for="todo in todos" :key="todo.text" :todo="todo" />
    </ol>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
export default {
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      required: false
    }
  }
}
</script>

