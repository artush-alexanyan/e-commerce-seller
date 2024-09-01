<template>
  <aside class="w-72">
    <div
      class="shadow-lg rounded-lg p-5 h-screen border-r border-r-gray-50 m-1.5 w-60 bg-white flex flex-col justify-between pb-10"
    >
      <div class="">
        <SidebarLogoVue />
        <SellerMenu />
      </div>
      <div class="flex flex-col items-center">User</div>
    </div>
  </aside>
</template>

<script setup>
import SellerMenu from '~/components/dashboard/sidebar/SellerMenu.vue'
import SidebarLogoVue from '~/components/dashboard/sidebar/SidebarLogo.vue'
</script>
