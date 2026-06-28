<script setup lang="ts">
defineProps<{ title?: string; subtitle?: string }>()
</script>

<template>
  <header class="tg-header">
    <h1 class="tg-header__title">
      <slot name="title">{{ title }}</slot>
    </h1>
    <p v-if="subtitle || $slots.subtitle" class="tg-header__subtitle">
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </header>
</template>

<style scoped>
.tg-header {
  padding: 16px 16px 8px;
}
.tg-header__title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: var(--tg-theme-text-color);
}
.tg-header__subtitle {
  margin: 4px 0 0;
  font-size: 14px;
  color: var(--tg-theme-hint-color);
}
</style>
