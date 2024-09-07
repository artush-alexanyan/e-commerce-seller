<template>
  <div class="w-56">
    <button
      @click="sellerSignout"
      :disabled="logoutLoading"
      :class="btnClass"
      type="button"
      name="Log out"
      aria-label="Log out"
    >
      <span>Logout</span>
      <IconSpinner v-if="logoutLoading" />
      <IconLogout v-else :stroke="'white'" />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  btnClass: {
    type: String,
    default:
      'flex items-center justify-center space-x-1.5 rounded-full w-full px-5 py-2.5 text-white bg-purple-600'
  }
})

import API from '@/api/api'
import IconLogout from '@/components/icons/IconLogout.vue'
import IconSpinner from '@/components/icons/IconSpinner.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const logoutLoading = ref(false)
const sellerSignout = async () => {
  logoutLoading.value = true
  try {
    await API.post('/auth/signout')
    setTimeout(() => {
      logoutLoading.value = false
      router.push({ path: '/' })
    }, 1500)
  } catch (error) {
    logoutLoading.value = false
    alert('Signout error')
  }
}
</script>
