<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useModeStore } from '@/store/settings/mode'

const modeStore = useModeStore()

onMounted(() => {
  modeStore.getCurrentMode()
})
</script>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
</style>
