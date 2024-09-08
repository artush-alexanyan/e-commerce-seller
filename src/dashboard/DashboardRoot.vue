<template>
  <div>
    <div :class="themeBg">
      <div class="wrapper flex">
        <SidebarRoot />
        <main class="content w-full">
          <NavbarRoot />
          <div class="p-2.5">
            <RouterView />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SidebarRoot from './sidebar/SidebarRoot.vue'
import NavbarRoot from './navbar/NavbarRoot.vue'
import { useModeStore } from '@/store/settings/mode'

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
const themeBg = computed(() => (mode.value === 'light' ? 'bg-gray-100' : 'bg-[#020420]'))
</script>
