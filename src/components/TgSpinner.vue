<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <div class="tg-spinner">
    <span class="tg-spinner__ring" role="status" aria-label="loading" />
    <p v-if="label" class="tg-spinner__label">{{ label }}</p>
  </div>
</template>

<style scoped>
.tg-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 48px 0;
}
.tg-spinner__ring {
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 2px solid var(--tg-theme-link-color);
  border-top-color: transparent;
  border-radius: 50%;
  animation: tg-spin 0.7s linear infinite;
}
.tg-spinner__label {
  font-size: 14px;
  color: var(--tg-theme-hint-color);
}
@keyframes tg-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
