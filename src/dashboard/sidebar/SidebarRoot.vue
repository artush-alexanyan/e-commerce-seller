<template>
  <aside class="w-72">
    <div
      class="shadow-lg rounded-lg p-5 h-screen m-1.5 w-60 flex flex-col justify-between pb-10"
      :class="themeBg"
    >
      <div class="">
        <SidebarLogo />
        <SellerMenu />
      </div>
      <div class="flex flex-col items-center">
        <SidebarLogout />
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import SellerMenu from '@/dashboard/sidebar/SellerMenu.vue'
import SidebarLogout from './SidebarLogout.vue'
import SidebarLogo from './SidebarLogo.vue'
import { useModeStore } from '@/store/settings/mode'

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
const themeBg = computed(() =>
  mode.value === 'light'
    ? 'bg-white border-r border-r-gray-50'
    : 'bg-[#020420] border-r border-[#131b30]'
)
</script>
