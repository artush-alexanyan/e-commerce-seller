<template>
  <div>
    <div class="">
      <div class="wrapper flex">
        <SidebarRoot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useModeStore } from '@/store/settings/mode'
import SidebarRoot from './sidebar/SidebarRoot.vue'

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
</script>
