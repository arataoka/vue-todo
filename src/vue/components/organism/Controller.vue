<template>
  <div :class="[$style.buttonWrapper]">
    <button :class="$style.button" @click="checkAll">すべて完了にする</button>
    <button :class="$style.button" @click="uncheckAll">すべて未完了にする</button>
    <button :class="$style.button" @click="deleteAll">すべて削除する</button>
    <button :class="$style.button" @click="save">保存する</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions(['save', 'checkAll', 'uncheckAll', 'deleteAll']),
};
</script>

<style module lang="scss">
.button {
  border: 1px solid #484848;
  padding: 10px 17px;
  transform: translateY(5px);
  transition: 0.3s;

  &:global(:hover) {
    background-color: #484848;
    box-shadow: 0 5px 3px rgba(0, 0, 0, 0.25);
    color: #fff;
    cursor: pointer;
    transform: translateY(0);
  }

  &:global(:active) {
    box-shadow: none;
    transform: translateY(5px);
  }
}

.buttonWrapper {
  display: flex;
  justify-content: space-between;
}
</style>
