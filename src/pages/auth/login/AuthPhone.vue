<template>
  <div class="auth-div min-w-80">
    <div class="flex flex-col">
      <label for="phone-input">Enter your phone number to get verified</label>
      <div class="relative w-full mt-2.5">
        <div class="absolute z-30 left-1.5 top-1/2 -translate-y-1/2 transform">
          <div class="relative">
            <button
              @click="emit('toggle-country-codes')"
              type="button"
              name="Select country"
              aria-label="Countries"
              class="flex items-center space-x-1.5 p-1 rounded-lg m-1"
            >
              <img class="h-6 mr-1.5" :src="selectedPhoneCode.flag" :alt="selectedPhoneCode.name" />
              <span>({{ selectedPhoneCode.phoneCode }})</span>
            </button>
            <div
              v-if="showCountryCodes"
              class="absolute z-30 rounded-b-xl left-0 top-10 bg-white border border-gray-200 border-t-0 p-2.5 min-w-60 h-60 overflow-y-auto"
            >
              <ul>
                <li
                  @click="emit('select-country', country)"
                  class="flex items-center my-1.5 cursor-pointer"
                  v-for="(country, index) in phoneData"
                  :key="index"
                >
                  <img class="h-6 mr-1.5" :src="country.flag" :alt="country.name" />
                  <span class="text-sm text-gray-500 hover:text-purple-500">{{
                    country.phoneCode
                  }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <input
          required
          :value="phoneModel"
          placeholder="123 456 789"
          @input="updatePhoneModel"
          type="text"
          :id="phoneInputId"
          class="rounded-lg border-2 border-gray-200 pl-[95px] pr-5 py-2.5 w-full focus:border-purple-500 outline-0"
        />
      </div>
      <button
        v-if="isForVerification"
        @click="emit('get-code')"
        type="button"
        name="auth"
        class="rounded-lg bg-purple-600 text-white px-5 py-2.5 mt-5"
      >
        Get code
      </button>
    </div>
  </div>
</template>

<script setup>
import phoneData from '../../local-db/countryPhones.json'

const emit = defineEmits([
  'select-country',
  'get-code',
  'update:phoneModel',
  'toggle-country-codes'
])

const props = defineProps({
  phoneModel: { type: [String, Number], default: '' },
  isForVerification: { type: Boolean, default: false },
  phoneInputId: { type: String, default: 'phone-input', required: true },
  selectedPhoneCode: {
    type: Object,
    default: () => ({
      name: 'Armenia',
      countryCode: 'AM',
      phoneCode: '+374',
      flag: 'https://flagsapi.com/AM/flat/32.png'
    })
  },
  showCountryCodes: { type: Boolean, default: false }
})

const updatePhoneModel = (e) => {
  emit('update:phoneModel', e.target.value)
}
</script>
