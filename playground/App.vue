<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <TgHeader title="vuegram" subtitle="Vue components for Telegram Mini Apps" />

  <div style="padding: 0 16px">
    <TgSection header="Buttons">
      <div style="display: flex; flex-direction: column; gap: 8px; padding: 12px">
        <TgButton @click="count++">Primary · tapped {{ count }}×</TgButton>
        <TgButton variant="secondary">Secondary</TgButton>
        <TgButton variant="destructive">Destructive</TgButton>
        <TgButton disabled>Disabled</TgButton>
      </div>
    </TgSection>

    <TgSection header="Cells" footer="Tap a row to see the chevron state.">
      <TgCell title="Account" subtitle="signed in" clickable />
      <TgCell title="Notifications" subtitle="all enabled" clickable />
      <TgCell title="Plain row (no chevron)" />
    </TgSection>

    <TgSection header="Spinner">
      <TgSpinner label="Loading…" />
    </TgSection>
  </div>
</template>
