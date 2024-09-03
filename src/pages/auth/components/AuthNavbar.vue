<template>
  <nav
    class="fixed z-50 top-0 left-0 w-full h-20 flex items-center justify-between px-5 transition-all duration-300"
    :class="themeBg"
  >
    <div class="brand">
      <RouterLink to="/" class="text-3xl flex items-center" :class="themeText"
        ><span class="text-purple-600 mr-1 narko text-6xl">NM</span>Seller</RouterLink
      >
    </div>
    <div class="right-tolls-list flex items-center space-x-5">
      <BaseLanguageSelect />
      <BaseModeSwitch />
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import BaseLanguageSelect from '@/components/base/BaseLanguageSelect.vue'
import BaseModeSwitch from '@/components/base/BaseModeSwitch.vue'
import { useModeStore } from '@/store/settings/mode'

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)

const themeBg = computed(() =>
  mode.value === 'light'
    ? 'bg-white border-b border-b-gray-200'
    : 'bg-[#020420] border-b border-b-[#131b30]'
)
const themeText = computed(() => (mode.value === 'light' ? 'text-primary' : 'text-white'))
</script>
