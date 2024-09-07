<template>
  <aside class="w-72">
    <div
      class="shadow-lg rounded-lg p-5 h-screen border-r border-r-gray-50 m-1.5 w-60 bg-white flex flex-col justify-between pb-10"
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
import SellerMenu from '@/dashboard/sidebar/SellerMenu.vue'
import SidebarLogout from './SidebarLogout.vue'
import SidebarLogo from './SidebarLogo.vue'
</script>
