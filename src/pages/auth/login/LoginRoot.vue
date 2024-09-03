<template>
  <div :class="themeBg">
    <AuthNavbar />
    <div class="loading-state flex items-center justify-center py-20" v-if="authLoading">
      <BaseLoader />
    </div>
    <div class="flex items-center justify-center h-screen" :class="themeBg" v-else>
      <div class="md:w-[400px] w-full p-5">
        <p class="text-4xl text-center font-semibold mb-5 narko" :class="themeText">Seller Login</p>
        <div class="">
          <form @submit.prevent="loginSeller">
            <BaseInput
              class="mt-5"
              v-model="email"
              :label="'Email'"
              :name="'email'"
              :id="'email'"
              :type="'email'"
              :icon-name="'uil:at'"
              :placeholder="'Enter your email'"
            >
              <template #input-icon>
                <IconEnvelope />
              </template>
            </BaseInput>

            <BaseInput
              class="mt-5"
              v-model="password"
              :label="'Password'"
              :name="'password'"
              :id="'password'"
              :type="showPassword ? 'text' : 'password'"
              :icon-name="'uil:lock'"
              :placeholder="'Enter your password'"
            >
              <template #input-icon><IconLock /></template>
              <template #input-icon-right>
                <button
                  type="button"
                  name="Toggle password"
                  aria-label="Toggle password"
                  @click="togglePassword"
                >
                  <IconEye v-if="showPassword" />
                  <IconEyeClosed v-else />
                </button>
              </template>
            </BaseInput>
            <button
              type="submit"
              :disabled="loginLoading"
              aria-label="Continue"
              name="Submit"
              class="rounded-lg bg-purple-600 text-white px-5 py-3.5 mt-5 w-full flex items-center justify-center space-x-1.5"
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
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import API from '@/api/api'
import { useRegisterStore } from '@/store/auth/register'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseLoader from '@/components/base/BaseLoader.vue'
import IconSpinner from '@/components/icons/IconSpinner.vue'
import BaseAlert from '@/components/base/BaseAlert.vue'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconLock from '@/components/icons/IconLock.vue'
import IconEyeClosed from '@/components/icons/IconEyeClosed.vue'
import IconEye from '@/components/icons/IconEye.vue'
import AuthNavbar from '../components/AuthNavbar.vue'

import { useModeStore } from '@/store/settings/mode'

const modeStore = useModeStore()
const router = useRouter()
const registerStore = useRegisterStore()
const mode = computed(() => modeStore.mode)
const themeText = computed(() => (mode.value === 'light' ? 'text-black' : 'text-white'))
const themeBg = computed(() => (mode.value === 'light' ? 'bg-white' : 'bg-[#020420]'))
const authLoading = computed(() => registerStore.authLoading)
const email = ref('')
const password = ref('')
const loginLoading = ref(false)
const loginMessages = ref([])
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

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

    const protectedRoutes = [
      'registration',
      'email_verification',
      'taxpayer_info',
      'payment_verification'
    ]

    const matchedRoutes = protectedRoutes.filter((item) => sellerStatus === item)
    if (matchedRoutes.length === 0) {
      return
    }
    const routeEndpoit = matchedRoutes[0]
    const nextRouteIndex = protectedRoutes.indexOf(routeEndpoit) + 1
    const nextRouteEndpoint = protectedRoutes[nextRouteIndex]
    router.push({ path: `/auth/register/${nextRouteEndpoint}` })
  } catch (error) {
    loginLoading.value = false
    console.error(error.response ? error.response.message : error.response)
    alert('Login error', error.response ? error.response.message : error.response)
  }
}
// onMounted(async () => await registerStore.checkUserState())
</script>
