<template>
  <li :class="$style.list__item">
    <TodoListItemCheckbox :item="item" />
    <label :for="item.id">
      <TodoListItemEditText v-if="item.editText" :id="item.id" :text.sync="item.text" />
      <TodoListItemText v-else :item="item" />
    </label>
    <TodoListItemDeleteButton @click.native="deleteItem({ id: item.id })" />
  </li>
</template>

<script>
import { mapActions } from 'vuex';
import TodoListItemDeleteButton from '../atoms/TodoListItemDeleteButton.vue';
import TodoListItemText from '../atoms/TodoListItemText.vue';
import TodoListItemEditText from '../atoms/TodoListItemEditText.vue';
import TodoListItemCheckbox from '../atoms/TodoListItemCheckbox.vue';

export default {
  components: {
    TodoListItemDeleteButton,
    TodoListItemText,
    TodoListItemEditText,
    TodoListItemCheckbox,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: mapActions(['deleteItem']),
};
</script>

<style module lang="scss">
.list__item {
  border-bottom: 1px dashed #fff;
  padding: 15px 10px 10px;
  position: relative;

  &:global(.fade-move) {
    transition: transform 0.5s ease-out;
  }

  &:global(.fade-enter-active),
  &:global(.fade-leave-active) {
    opacity: 1;
    transition: opacity 0.5s ease-out;
  }

  &:global(.fade-enter),
  &:global(.fade-leave-to) {
    opacity: 0;
  }

  &:global(.fade-leave-to) {
    opacity: 0;
  }

  &:global(:hover) {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, opacity 0.5s ease-out;
  }
}
</style>
