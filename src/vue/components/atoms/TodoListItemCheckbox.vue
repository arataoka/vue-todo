<template>
  <input
    :id="item.id"
    v-model="item.isChecked"
    type="checkbox"
    :class="[{ [$style.active]: item.isChecked }, $style.list__checkbox]"
  />
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style module lang="scss">
.list__checkbox {
  display: none;

  &:global(+ label) {
    color: #ddd;
    cursor: pointer;
    display: block;
    font: 14px/20px 'Open Sans', Arial, sans-serif;
    padding-left: 50px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  &:global(+ label::before) {
    border: 1px solid #6cc0e5;
    content: '';
    display: block;
    height: 20px;
    left: 0;
    opacity: 0.6;
    position: absolute;
    top: -2px;
    -webkit-transition: all 0.12s, border-color 0.08s;
    transition: all 0.12s, border-color 0.08s;
    width: 20px;
  }

  &:global(+ label:last-child) {
    margin-bottom: 0;
  }
}

.list__checkbox.active + label::before {
  border-left-color: transparent;
  border-radius: 0;
  border-top-color: transparent;
  left: 5px;
  opacity: 1;
  top: -7px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 10px;
}
</style>
