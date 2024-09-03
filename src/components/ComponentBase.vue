<template>
  <div></div>
</template>

<script setup>
import { computed } from 'vue'
import { useModeStore } from '@/store/settings/mode'

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
</script>
