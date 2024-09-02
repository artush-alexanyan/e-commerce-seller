<template>
  <nav
    class="fixed z-50 bg-white top-0 left-0 w-full h-20 border border-b-gray-200 flex items-center justify-between px-5"
  >
    <div class="brand">
      <RouterLink to="/" class="text-3xl text-primary"
        ><strong class="text-purple-600 mr-1">NM</strong>Seller</RouterLink
      >
    </div>
    <div class="right-tolls-list">
      <BaseLanguageSelect />
    </div>
  </nav>
</template>

<script setup>
import BaseLanguageSelect from '@/components/base/BaseLanguageSelect.vue'
</script>
