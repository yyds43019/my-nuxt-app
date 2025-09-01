<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const items = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Test",
    to: "/test",
  },
  {
    label: "Admin",
    to: "/admin",
  },
] satisfies NavigationMenuItem[];
</script>

<template>
  <u-navigation-menu :items="items" class="w-full justify-center" />
</template>
