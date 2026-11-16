<script setup lang="ts">
import BasicButton from '@/components/BasicButton.vue';

const props = defineProps<{
  displayString: string
}>();
</script>

<template lang="html">
  <p>This is a message from the homepage component</p>
  <p>The following was passed as a prop: {{ props.displayString }}</p>
  <BasicButton label="not button" />
</template>