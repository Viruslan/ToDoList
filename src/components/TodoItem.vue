<template>
    <li>
      <span v-bind:class="{ done: todo.completed }">
        <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
        <strong>
          {{ index + 1 }}
        </strong>
        {{ todo.title }}
      </span>
      <button class="close" v-on:click="$emit('remove-todo', todo.id)"></button>
    </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  border-width: 0 0 1px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
li:last-child{border-bottom-width: 0;}

.close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
}
.close:hover {
  opacity: 0.75;
}

input {
  margin-right: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>