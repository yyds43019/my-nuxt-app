<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const items = [
  {
    label: "Admin Home",
    to: "/admin",
  },
  {
    label: "Admin Test",
    to: "/admin/test",
  },
] satisfies NavigationMenuItem[];
</script>

<template>
  <u-navigation-menu :items="items" class="w-full justify-center" />
</template>
