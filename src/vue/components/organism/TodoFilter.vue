<template>
  <div :class="$style.select">
    <label for="select">
      <select
        id="select"
        :value="selectedValue"
        :class="$style.select__item"
        @change="updateSelectedValue({ selectedValue: $event.target.value })"
      >
        <option value="All">すべて表示</option>
        <option value="Complete">完了のみ表示</option>
        <option value="Incomplete">未完了のみ表示</option>
      </select>
      <span :class="$style.select__text">{{ selectedValue }}</span>
    </label>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters('todoFilter', ['selectedValue']),
  methods: mapActions('todoFilter', ['updateSelectedValue']),
};
</script>

<style module lang="scss">
.select__item {
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid #e5e5e5;
  border-radius: 50px;
  display: block;
  height: 30px;
  padding: 20px;
  width: 100%;

  &:global(::-ms-expand) {
    display: none;
  }
}

.select__text {
  font-size: 16px;
  left: 50%;
  letter-spacing: 0.5em;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.select {
  margin-left: auto;
  position: relative;
  width: 50%;

  &:global(::before) {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #da3c41;
    content: '';
    height: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    right: 0.8em;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
  }
}
</style>
