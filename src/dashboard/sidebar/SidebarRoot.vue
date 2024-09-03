<template>
  <aside class="w-72">
    <div
      class="shadow-lg rounded-lg p-5 h-screen border-r border-r-gray-50 m-1.5 w-60 bg-white flex flex-col justify-between pb-10"
    >
      <div class="">
        <SidebarLogoVue />
        <SellerMenu />
      </div>
      <div class="flex flex-col items-center">
        <SellerInfo />
      </div>
    </div>
  </aside>
</template>

<script setup>
import SellerMenu from '@/dashboard/sidebar/SellerMenu.vue'
import SidebarLogoVue from '@/dashboard/sidebar/SidebarLogo.vue'
import SellerInfo from './SellerInfo.vue'
</script>
