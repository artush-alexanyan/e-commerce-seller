<template>
  <div>
    <div class="">
      <div class="wrapper flex">
        <SidebarRoot />
        <main class="content w-full">
          <NavbarRoot />
          <div class="p-5">
            <RouterView />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useModeStore } from '@/store/settings/mode'
import SidebarRoot from './sidebar/SidebarRoot.vue'
import NavbarRoot from './navbar/NavbarRoot.vue'

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
</script>
