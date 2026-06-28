<script setup lang="ts">
defineProps<{ header?: string; footer?: string }>()
</script>

<template>
  <div class="tg-section">
    <div v-if="header || $slots.header" class="tg-section__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="tg-section__body">
      <slot />
    </div>
    <div v-if="footer || $slots.footer" class="tg-section__footer">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<style scoped>
.tg-section {
  margin: 16px 0;
}
.tg-section__header,
.tg-section__footer {
  padding: 6px 16px;
  font-size: 13px;
  color: var(--tg-theme-hint-color);
}
.tg-section__header {
  text-transform: uppercase;
}
.tg-section__body {
  background-color: var(--tg-theme-section-bg-color);
  border-radius: var(--vg-radius-lg);
  overflow: hidden;
}
</style>
