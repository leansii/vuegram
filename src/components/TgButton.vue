<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'destructive'
    disabled?: boolean
    type?: 'button' | 'submit'
  }>(),
  { variant: 'primary', type: 'button' },
)
</script>

<template>
  <button :type="type" :disabled="disabled" class="tg-button" :class="`tg-button--${variant}`">
    <slot />
  </button>
</template>

<style scoped>
.tg-button {
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: var(--vg-radius);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.tg-button:active {
  opacity: 0.7;
}
.tg-button:disabled {
  opacity: 0.5;
  cursor: default;
}
.tg-button--primary {
  background-color: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
}
.tg-button--secondary {
  background-color: var(--tg-theme-section-bg-color);
  color: var(--tg-theme-link-color);
}
.tg-button--destructive {
  background-color: var(--tg-theme-section-bg-color);
  color: var(--tg-theme-destructive-text-color);
}
</style>
