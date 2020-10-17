<template>
  <input
    :value="text"
    type="text"
    :class="$style.list__editText"
    @keyup.shift.enter="handleBlur"
    @blur="handleChangeText"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChangeText(event) {
      if (event.target.value === '') this.$store.dispatch('deleteItem', { id: this.id });
      this.$store.dispatch('changeTodoText', { id: this.id, text: event.target.value });
    },
    handleBlur() {
      document.activeElement.blur();
    },
  },
};
</script>

<style module>
.list__editText {
  background-color: transparent;
  border: none;
  color: #ffd770;
  font-size: 16px;
  outline: none;
  width: 100%;
}
</style>
