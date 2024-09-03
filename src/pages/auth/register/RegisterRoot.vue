<template>
  <div class="md:mt-10 mt-28">
    <AuthNavbar />
    <div class="flex items-center justify-center h-screen w-full" :class="themeBg">
      <div class="md:w-[480px] w-full p-5 md:mx-auto">
        <h1 class="text-4xl text-center font-semibold mb-5 narko" :class="themeText">
          Seller Registration
        </h1>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AuthNavbar from '../components/AuthNavbar.vue'
import { useModeStore } from '@/store/settings/mode'

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
const themeText = computed(() => (mode.value === 'light' ? 'text-black' : 'text-white'))
const themeBg = computed(() => (mode.value === 'light' ? 'bg-white' : 'bg-[#020420]'))
</script>
