<template>
  <div class="">
    <div v-if="authLoading" class="loader flex items-center justify-center my-20">
      <BaseLoader />
    </div>
    <div v-else class="taxpayer-info">
      <p class="text-center text-lg mb-2.5">Tax payer information</p>
      <p class="text-center text-sm text-gray-500 mb-5">
        Please enter your organisation information to continue
      </p>
      <div class="taxpayer-form">
        <form @submit.prevent="saveTaxpayerInfo">
          <BaseSelect
            :label="'Your business country'"
            :items="countryData"
            :name="'countryData'"
            :id="'countryData'"
            :item-value="taxCountry"
            @select-item="selectBusinessCountry"
          />
          <BaseSelect
            :label="'Select your business type'"
            :items="businessTypesList"
            :name="'Business type'"
            :id="'business-type'"
            :item-value="selectedBusinesType"
            @select-item="selectBusinesType"
            class="mt-5"
          />
          <BaseInput
            v-model="taxpayerID"
            :label="'Tax payer ID'"
            :name="'taxpayerId'"
            :id="'taxpayerId'"
            :placeholder="'Your tax payer ID'"
            :input-class="'px-5'"
            class="mt-5"
          >
            <template v-if="isTaxIdValid" #input-icon-right>
              <IconCheckCircle />
            </template>
          </BaseInput>

          <BaseInput
            v-model="businessName"
            :label="'Business name'"
            :name="'businessName'"
            :id="'businessName'"
            :placeholder="'Your organization name'"
            :input-class="'px-5'"
            class="mt-5"
          />
          <button
            type="submit"
            :disabled="taxLoading"
            aria-label="Continue"
            name="Submit"
            class="rounded-lg bg-purple-600 text-white px-5 py-3 mt-5 w-full flex items-center justify-center space-x-1.5"
          >
            <span>Continue</span>
            <IconSpinner v-if="taxLoading" />
          </button>
        </form>
      </div>
    </div>
    <BaseAlert :messages="registerMessages" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import countryData from '@/local-db/countryPhones'
import { useRegisterStore } from '@/store/auth/register'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseLoader from '@/components/base/BaseLoader.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import IconCheckCircle from '@/components/icons/IconCheckCircle.vue'
import IconSpinner from '@/components/icons/IconSpinner.vue'
import BaseAlert from '@/components/base/BaseAlert.vue'

const authLoading = computed(() => registerStore.authLoading)
const registerStore = useRegisterStore()
const seller = computed(() => registerStore.seller)
const registerMessages = computed(() => registerStore.registerMessages)
const sellerFullName = computed(() => {
  if (seller.value) {
    return `${seller.value.name} ${seller.value.lastName}`
  }
})
const selectedBusinesType = ref('')
const taxpayerID = ref('')
const businessName = ref('')
const taxCountry = ref('')
const businessType = ref(null)
const taxLoading = computed(() => registerStore.taxLoading)

const businessTypesList = ref([
  { title: 'Self-employment', itemValue: 'self_employment' },
  { title: 'Individual Entrepreneur', itemValue: 'individual_entrepreneur' },
  { title: 'Limited Liability Company (LLC)', itemValue: 'llc' },
  { title: 'Sole Proprietorship', itemValue: 'sole_proprietorship' },
  { title: 'Partnership', itemValue: 'partnership' },
  { title: 'Corporation', itemValue: 'corporation' },
  { title: 'Non-Profit Organization', itemValue: 'non_profit' },
  { title: 'Public Limited Company (PLC)', itemValue: 'plc' },
  { title: 'Cooperative', itemValue: 'cooperative' },
  { title: 'Joint-Stock Company', itemValue: 'joint_stock' },
  { title: 'Private Limited Company', itemValue: 'private_limited' },
  { title: 'Limited Partnership', itemValue: 'limited_partnership' },
  { title: 'Public Sector', itemValue: 'public_sector' },
  { title: 'Trust', itemValue: 'trust' },
  { title: 'Holding Company', itemValue: 'holding_company' }
])

const isTaxIdValid = computed(() => taxpayerID.value.length === 10)

const selectBusinesType = (item) => {
  console.log('item', item)
  if (item === 'self_employment') {
    businessName.value = sellerFullName.value
  }

  const selectedItemObject = businessTypesList.value.find(
    (businesType) => businesType.itemValue === item
  )
  console.log('selectedItemObject', selectedItemObject)
  businessType.value = selectedItemObject
}

const selectBusinessCountry = (item) => {
  taxCountry.value = item
}

const saveTaxpayerInfo = async () => {
  await registerStore.saveTaxpayerInfo(
    taxpayerID.value,
    taxCountry.value,
    businessType.value,
    businessName.value
  )
}

onMounted(async () => await registerStore.checkUserState())
</script>
