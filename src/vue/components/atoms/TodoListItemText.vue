<template>
  <span :class="[{ [$style.active]: item.isChecked }, $style.list__text]" @click.prevent="item.editText = true">
    {{ item.text }}
  </span>
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

<style module>
.list__text {
  font-size: 16px;
}

.list__text.active {
  color: lightblue;
  text-decoration: line-through;
}
</style>
