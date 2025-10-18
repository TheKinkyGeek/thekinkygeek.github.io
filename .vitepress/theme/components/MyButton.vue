<template>
  <VPButton class="my-btn" :href="href">
    {{ text }}
  </VPButton>
</template>
<script setup>
import { VPButton } from 'vitepress/theme';

defineProps({
  href: String,
  text: String
})
</script>

<style scoped>
.my-btn {
  text-decoration: none !important;
}
.my-btn:hover {
  text-decoration: none !important;
}
</style>
