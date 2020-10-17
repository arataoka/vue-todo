<template>
  <div>
    <h1 :class="$style.title">Todos</h1>
    <TodoInput />
    <TodoFilter />
    <TodoList />
    <Controller />
  </div>
</template>

<script>
import TodoFilter from '../organism/TodoFilter.vue';
import TodoInput from '../organism/TodoInput.vue';
import TodoList from '../organism/TodoList.vue';
import Controller from '../organism/Controller.vue';

export default {
  components: {
    Controller,
    TodoInput,
    TodoList,
    TodoFilter,
  },
  created() {
    this.$store.dispatch('load');
  },
};
</script>

<style module>
.title {
  color: rgba(175, 47, 47, 0.15);
  font-size: 50px;
  text-align: center;
}
</style>
