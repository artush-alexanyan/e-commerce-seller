<template>
  <div class="">
    <BaseAlert :messages="registerMessages" />
    <div v-if="authLoading" class="loding-state flex items-center justify-center py-20 w-full">
      <BaseLoader />
    </div>
    <div class="step-one" v-else>
      <p class="text-center text-lg mb-5">Let us know about yourself</p>
      <div class="registration-form">
        <form @submit.prevent="submitFirstStep">
          <div class="grid md:grid-cols-2 gap-5">
            <BaseInput
              v-model="name"
              :label="'Name'"
              :name="'name'"
              :id="'name'"
              :placeholder="'Jhon'"
            >
              <template #input-icon>
                <IconUser />
              </template>
            </BaseInput>
            <BaseInput
              v-model="lastName"
              :label="'Your Last name'"
              :name="'last-name'"
              :id="'last-name'"
              :placeholder="'Doe'"
            >
              <template #input-icon>
                <IconUser />
              </template>
            </BaseInput>
          </div>

          <AuthPhone
            class="mt-5"
            v-model="phoneModel"
            :phone-model="phoneModel"
            :phone-input-id="'phoneInputStepOne'"
            :selected-phone-code="selectedPhoneCode"
            :show-country-codes="showCountryCodes"
            :is-for-verification="false"
            @update:phoneModel="updatePhoneModel"
            @toggle-country-codes="toggleCountryCode"
            @select-country="selectCountry"
          />

          <BaseInput
            class="mt-5"
            v-model="email"
            :label="'Your email'"
            :name="'email'"
            :id="'email'"
            :type="'email'"
            :icon-name="'uil:at'"
            :placeholder="'example@gmail.com'"
          />

          <BaseInput
            class="mt-5"
            v-model="password"
            :label="'Create strong password'"
            :name="'password'"
            :id="'password'"
            :type="'password'"
            :icon-name="'uil:lock'"
            :placeholder="'Minimum 8 characters length'"
          />

          <div class="mt-5 flex items-center space-x-2.5">
            <p>
              Accept <RouterLink class="text-purple" to="/">Terms</RouterLink> &
              <RouterLink class="text-purple" to="/">Privacy</RouterLink>
            </p>

            <BaseInput
              v-model="isTermsAccepted"
              :type="'checkbox'"
              :label="''"
              :name="'privacy'"
              :id="'privacy'"
              :icon-name="''"
            />
          </div>
          <button
            type="submit"
            :disabled="stepOneLoading"
            aria-label="Continue"
            name="Submit"
            class="rounded-lg bg-purple-600 text-white px-5 py-2.5 mt-5 w-full flex items-center justify-center space-x-1.5"
          >
            <span>Continue</span>
            <IconSpinner v-if="stepOneLoading" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRegisterStore } from '@/store/auth/register'
import BaseAlert from '@/components/base/BaseAlert.vue'
import AuthPhone from '@/components/base/AuthPhone.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseLoader from '@/components/base/BaseLoader.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconSpinner from '@/components/icons/IconSpinner.vue'
const registerStore = useRegisterStore()
const name = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const isTermsAccepted = ref(true)
const phoneModel = ref('')
const showCountryCodes = ref(false)
const stepOneLoading = computed(() => registerStore.stepOneLoading)
const authLoading = computed(() => registerStore.authLoading)
const registerMessages = computed(() => registerStore.registerMessages)

const selectedPhoneCode = ref({
  name: 'Armenia',
  countryCode: 'AM',
  phoneCode: '+374',
  flag: 'https://flagsapi.com/AM/flat/32.png'
})

const selectCountry = (country) => {
  selectedPhoneCode.value = country
  showCountryCodes.value = false
}
const updatePhoneModel = (newPhone) => {
  phoneModel.value = newPhone
}
const toggleCountryCode = () => {
  showCountryCodes.value = !showCountryCodes.value
}

const submitFirstStep = async () => {
  await registerStore.submitFirstStep(
    name.value,
    lastName.value,
    email.value,
    phoneModel.value,
    password.value
  )
}
// onMounted(async () => await registerStore.checkUserState())
</script>
