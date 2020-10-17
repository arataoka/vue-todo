<template>
  <ul :class="$style.list">
    <transition-group name="fade" appear>
      <TodoListItem v-for="item in displayedItems" :key="item.id" :item="item" />
    </transition-group>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoListItem from '../molecules/TodoListItem.vue';

export default {
  components: {
    TodoListItem,
  },
  computed: mapGetters(['displayedItems']),
};
</script>

<style module>
.list {
  background-color: #484848;
  list-style: none;
  min-height: 300px;
  padding: 40px;
  width: 100%;
}
</style>
