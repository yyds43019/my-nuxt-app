<script setup lang="ts">
const count = ref(0);

function add() {
  count.value += 1;
}
</script>

<template>
  <div>Home Page</div>
  <div>{{ count }}</div>
  <div><u-button @click="add">Click</u-button></div>
</template>
