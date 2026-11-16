<script setup lang="ts">
const { label = "Click me"} = defineProps<{
  label?: string,
}>();
</script>

<template lang="html">
  <button class="hover:cursor-pointer px-4 py-2 bg-green-500 rounded-md text-white">
    <p>{{ label }}</p>
  </button>
</template>