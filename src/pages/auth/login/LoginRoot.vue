<template>
  <div :class="themeBg">
    <AuthNavbar />
    <div
      class="loading-state flex items-center justify-center py-40"
      :class="themeBg"
      v-if="authLoading"
    >
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
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
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

const router = useRouter()
const modeStore = useModeStore()
const registerStore = useRegisterStore()
const mode = computed(() => modeStore.mode)
const themeText = computed(() => (mode.value === 'light' ? 'text-black' : 'text-white'))
const themeBg = computed(() => (mode.value === 'light' ? 'bg-white' : 'bg-[#020420]'))
const authLoading = computed(() => registerStore.authLoading)
const loginLoading = computed(() => registerStore.loginLoading)
const loginMessages = computed(() => registerStore.registerMessages)
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const loginSeller = async () => {
  await registerStore.loginSeller(email.value, password.value)
}
// onMounted(async () => await registerStore.checkUserState())
</script>
