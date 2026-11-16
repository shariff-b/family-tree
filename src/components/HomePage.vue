<script setup lang="ts">
const props = defineProps<{
  displayString: string
}>();
</script>

<template>
  <p>This is a message from the homepage component</p>
  <p>The following was passed as a prop: {{ props.displayString }}</p>
</template>