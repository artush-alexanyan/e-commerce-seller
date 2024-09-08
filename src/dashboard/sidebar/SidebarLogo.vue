<template>
  <div class="sidebar-logo flex items-center space-x-2">
    <img src="@/assets/images/logos/logo-1.png" class="h-8" alt="logo" />
    <span class="text-4xl narko" :class="themeText">Seller</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useModeStore } from '@/store/settings/mode'

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
const themeText = computed(() => (mode.value === 'light' ? 'text-black' : 'text-white'))
</script>
