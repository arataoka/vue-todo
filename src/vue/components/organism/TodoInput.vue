<template>
  <input
    :value="inputText"
    :class="$style.inputText"
    type="text"
    placeholder="Add Item ( SHIFT + ENTER )"
    @keyup.shift.enter="addItem"
    @input="updateInputText({ inputText: $event.target.value })"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters('todoInput', ['inputText']),
  methods: { ...mapActions(['addItem', 'updateInputText']), ...mapActions('todoInput', ['updateInputText']) },
};
</script>

<style module>
.inputText {
  font-size: 16px;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
}
</style>
