<template>
  <div>
    <h2>ToDo list</h2>
    <router-link to="/">Home</router-link>
    <hr />
    <add-todo @add-todo="AddTodo" />
    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="todos.length"
      v-bind:todos="todos"
      @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from "@/components/Loader.vue";
export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        this.loading = false;
      });
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    AddTodo(todo) {
      this.todos.push(todo);
    },
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
};
</script>