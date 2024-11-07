<template>
  <nav
    class="transition-all duration-300 h-20 mr-2.5 mt-1.5 mx-2.5 p-5 flex items-center justify-between"
    :class="[themeBg, themeText]"
  >
    <span>Hello</span>
    <div class="flex items-center space-x-2.5">
      <BaseLanguageSelect />
      <BaseModeSwitch />
      <SellerInfo />
    </div>
  </nav>
</template>

<script setup>
import BaseLanguageSelect from '@/components/base/BaseLanguageSelect.vue'
import SellerInfo from './SellerInfo.vue'
import BaseModeSwitch from '@/components/base/BaseModeSwitch.vue'
import { computed } from 'vue'
import { useModeStore } from '@/store/settings/mode'

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
const themeText = computed(() => (mode.value === 'light' ? 'text-black' : 'text-white'))
const themeBg = computed(() =>
  mode.value === 'light'
    ? 'bg-white shadow-sm rounded-xl'
    : 'bg-[#020420] border-b-2 border-b-[#131b30]'
)
</script>
