<template>
  <div class="">
    <div class="loading-state flex items-center justify-center py-20" v-if="authLoading">
      <BaseLoader />
    </div>
    <div class="flex items-center justify-center h-screen" v-else>
      <div class="min-w-[400px]">
        <p class="text-3xl text-center mb-10">Login page</p>
        <div class="">
          <form @submit.prevent="loginSeller" action="">
            <BaseInput
              class="mt-5"
              v-model="email"
              :label="'Email'"
              :name="'email'"
              :id="'email'"
              :type="'email'"
              :icon-name="'uil:at'"
              :placeholder="'Enter your email'"
            />

            <BaseInput
              class="mt-5"
              v-model="password"
              :label="'Password'"
              :name="'password'"
              :id="'password'"
              :type="'password'"
              :icon-name="'uil:lock'"
              :placeholder="'Enter your password'"
            />
            <button
              type="submit"
              :disabled="loginLoading"
              aria-label="Continue"
              name="Submit"
              class="rounded-lg bg-purple-600 text-white px-5 py-3 mt-5 w-full flex items-center justify-center space-x-1.5"
            >
              <span>Login</span>
              <IconSpinner v-if="loginLoading" />
            </button>
          </form>
        </div>
      </div>
    </div>
    <BaseAlert :messages="loginMessages" />
  </div>
</template>

<script setup>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseLoader from '@/components/base/BaseLoader.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconSpinner from '@/components/icons/IconSpinner.vue'
import BaseAlert from '@/components/base/BaseAlert.vue'
import { useRegisterStore } from '@/store/auth/register'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import API from '@/api/api'

const router = useRouter()
const registerStore = useRegisterStore()
const authLoading = computed(() => registerStore.authLoading)

const email = ref('')
const password = ref('Tester2024!')
const loginLoading = ref(false)
const loginMessages = ref([])

const loginSeller = async () => {
  loginLoading.value = true
  try {
    const response = await API.post('/auth/login', {
      email: email.value,
      password: password.value
    })
    loginLoading.value = false
    alert(
      `Login successful for the seller - ${response.data.seller.name} ${response.data.seller.lastName}`
    )
    const sellerStatus = response.data.seller.status
    console.log('seller status', sellerStatus)

    const protectedRoutes = [
      'registration',
      'email_verification',
      'taxpayer_info',
      'payment_verification'
    ]

    const matchedRoutes = protectedRoutes.filter((item) => sellerStatus === item)
    console.log('matchedRoutes', matchedRoutes)
    if (matchedRoutes.length === 0) {
      return
    }
    const routeEndpoit = matchedRoutes[0]
    console.log('routeEndpoit', routeEndpoit)
    const nextRouteIndex = protectedRoutes.indexOf(routeEndpoit) + 1
    console.log('nextRouteIndex', nextRouteIndex)
    const nextRouteEndpoint = protectedRoutes[nextRouteIndex]
    console.log('nextRouteEndpoint', nextRouteEndpoint)
    router.push({ path: `/auth/register/${nextRouteEndpoint}` })
  } catch (error) {
    loginLoading.value = false
    console.error('errr', error)
    console.error(error.response ? error.response.message : error.response)
    alert('Login error', error.response ? error.response.message : error.response)
  }
}
// onMounted(async () => await registerStore.checkUserState())
</script>
