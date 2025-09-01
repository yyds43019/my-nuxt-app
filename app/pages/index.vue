<script setup lang="ts">
const { loggedIn, user } = useUserSession();

const count = ref(0);

function add() {
  count.value += 1;
}
</script>

<template>
  <div>Home Page</div>
  <div v-if="loggedIn">
    <div>signed username: {{ user?.name }}</div>
  </div>
  <div>{{ count }}</div>
  <div><u-button @click="add">Click</u-button></div>
</template>
