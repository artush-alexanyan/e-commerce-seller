<template>
  <div class="mode-switch">
    <div class="flex items-center justify-center">
      <button
        @click="toggleAppMode"
        class="p-2 rounded-full transition-all duration-300"
        :class="mode === 'light' ? 'bg-white' : 'bg-[#020420]'"
        type="button"
        name="Toggle mode"
        aria-label="Toggle mode"
      >
        <IconMoon v-if="mode === 'light'" />
        <IconSun v-else />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import IconMoon from '../icons/IconMoon.vue'
import IconSun from '../icons/IconSun.vue'
import { useModeStore } from '@/store/settings/mode'

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
const toggleAppMode = () => {
  modeStore.toggleAppMode()
}
</script>
