<template>
  <div class="verify-email">
    <p class="text-center text-lg mb-2.5">Verify your email</p>
    <p class="text-center text-sm text-gray-500 mb-5">
      We have sent 6 digit verification to your email please check your inbox and verify your email
      address to continue.
    </p>
    <div class="form">
      <form @submit.prevent="verifyEmail">
        <BaseInput
          v-model="verificationCode"
          :input-class="'px-5'"
          :label="'Enter verification code'"
          :name="'verificationCode'"
          :id="'verificationCode'"
          :placeholder="'Enter 6 digit number sent to your email'"
        />
        <span class="text-xs my-1 text-red-500" v-if="getValidationError">{{
          getValidationError
        }}</span>
        <button
          type="submit"
          :disabled="verifing || !isVerificationCodeValid"
          aria-label="Continue"
          name="Submit"
          :class="isVerificationCodeValid ? 'bg-purple-600' : 'bg-purple-400'"
          class="rounded-lg text-white px-5 py-3.5 mt-5 w-full flex items-center justify-center space-x-1.5"
        >
          <span>Verify</span>
          <IconSpinner v-if="verifing" />
        </button>
      </form>
      <div class="flex items-center w-full my-5 space-x-2.5">
        <p>Did not get a code?</p>
        <button
          :disabled="verifing"
          type="button"
          aria-label="Resend code"
          name="Resend code"
          class="rounded-lg text-indigo-600 flex items-center justify-center space-x-1"
        >
          <span>Resend</span>
          <!-- <IconSpinner :stroke="'#4f46e5'" :icon-class="'h-4'" /> -->
        </button>
      </div>
    </div>
    <BaseAlert :messages="emailMessages" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseAlert from '@/components/base/BaseAlert.vue'
import { useEmailStore } from '@/store/auth/email-verification'
import IconSpinner from '@/components/icons/IconSpinner.vue'

const emailStore = useEmailStore()
const verificationCode = ref('')
const verifing = computed(() => emailStore.emailVerifying)
const emailMessages = computed(() => emailStore.emailMessages)

const verifyEmail = async () => {
  const code = verificationCode.value
  console.log(typeof code)
  await emailStore.verifyEmail(code)
}
const isVerificationCodeValid = computed(() => {
  return verificationCode.value.length === 6
})

const getValidationError = computed(() => {
  if (verificationCode.value.length > 6) {
    return 'Code should be maximum 6 characters length'
  }
})
</script>
