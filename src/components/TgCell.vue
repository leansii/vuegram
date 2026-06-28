<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  /** Show a chevron + pointer cursor when the row is tappable. */
  clickable?: boolean
}>()
</script>

<template>
  <div class="tg-cell" :class="{ 'tg-cell--clickable': clickable }">
    <div class="tg-cell__body">
      <div v-if="title || $slots.title" class="tg-cell__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div v-if="subtitle || $slots.subtitle" class="tg-cell__subtitle">
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
      <slot />
    </div>
    <slot name="after" />
    <span v-if="clickable" class="tg-cell__chevron" aria-hidden="true">›</span>
  </div>
</template>

<style scoped>
.tg-cell {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  text-align: left;
  border-bottom: 0.5px solid var(--tg-theme-section-separator-color);
}
.tg-cell:last-child {
  border-bottom: none;
}
.tg-cell--clickable {
  cursor: pointer;
}
.tg-cell--clickable:active {
  opacity: 0.7;
}
.tg-cell__body {
  min-width: 0;
  flex: 1;
}
.tg-cell__title {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tg-cell__subtitle {
  font-size: 14px;
  color: var(--tg-theme-hint-color);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tg-cell__chevron {
  color: var(--tg-theme-hint-color);
}
</style>
