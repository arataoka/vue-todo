<template>
  <span :class="$style.list__close" />
</template>

<style module lang="scss">
.list__close {
  height: 20px;
  position: absolute;
  right: 5px;
  top: 0;
  transform: translateY(15px);
  width: 20px;

  &:global(::before) {
    background-color: #fff;
    content: '';
    display: block;
    height: 20px;
    position: absolute;
    right: 10px;
    transform: rotate(45deg);
    width: 1px;
  }

  &:global(::after) {
    background-color: #fff;
    content: '';
    display: block;
    height: 20px;
    position: absolute;
    right: 10px;
    transform: rotate(-45deg);
    width: 1px;
  }

  &:global(:hover::before),
  &:global(:hover::after) {
    background-color: gold;
    transition: 0.3s;
  }
}
</style>
