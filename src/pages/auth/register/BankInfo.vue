<template>
  <div class="">
    <div class="loading-state flex items-center justify-center py-20" v-if="authLoading">
      <BaseLoader />
    </div>
    <div class="" v-else>
      <div class="">Bank info</div>
    </div>
  </div>
</template>

<script setup>
import BaseLoader from '@/components/base/BaseLoader.vue'
import { useRegisterStore } from '@/store/auth/register'
import { computed, onMounted } from 'vue'

const registerStore = useRegisterStore()
const authLoading = computed(() => registerStore.authLoading)

// onMounted(async () => await registerStore.checkUserState())
</script>
