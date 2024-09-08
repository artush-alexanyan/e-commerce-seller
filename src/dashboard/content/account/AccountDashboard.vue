<template>
  <div class="rounded-xl p-5" :class="[themeText, themeBg]">
    <div class="" v-if="seller">
      <ul class="flex items-center space-x-5">
        <li v-for="(tab, index) in accountTabItems" :key="index">
          <button
            class="lg:text-xl md:text-lg text-base py-2.5 ml-3.5"
            @click="changeTab(tab)"
            :class="
              currentTab === tab.title_lg
                ? 'text-purple-600 border-b-2 border-b-purple-600 border-progress'
                : themeTab
            "
            type="button"
          >
            {{ tab.title }}
          </button>
        </li>
      </ul>
      <div
        class="tab-content p-5 my-5 rounded-xl"
        :class="contentBg"
        v-if="currentTab === 'seller_info'"
      >
        <img
          v-if="seller.avatar"
          :src="seller.avatar"
          alt="avatar"
          class="h-16 w-16 rounded-lg border border-gray-200 object-cover"
        />
        <div
          v-else
          class="h-16 w-16 rounded-full border-2 border-gray-400 flex items-center justify-center"
        >
          <IconAvatar :icon-class="'h-12'" />
        </div>
        <p class="pt-2.5 narko text-3xl text-purple-600">{{ seller.name }} {{ seller.lastName }}</p>
        <p class="pt-2.5">
          Email:
          {{ seller.email }}
          <span :class="seller.emailVerified ? 'text-green-600' : 'text-red-600'">{{
            seller.emailVerified ? 'Verified' : 'Unverified'
          }}</span>
        </p>
        <p class="pt-2.5">Balance:{{ seller.balance }}</p>
        <p class="pt-2.5">Sales:{{ seller.sales }}</p>
        <p class="pt-2.5">Acoount created at{{ formatMongoDate(seller.createdAt) }}</p>
        <p class="pt-2.5">Account updated: {{ formatMongoDate(seller.updatedAt) }}</p>
      </div>
      <div
        class="tab-content p-5 my-5 rounded-xl"
        :class="contentBg"
        v-if="currentTab === 'tax_info'"
      >
        <div class="" v-if="seller.taxpayerInfo">
          <p v-if="seller.taxpayerInfo.taxpayerID" class="mt-5">
            taxpayerID {{ seller.taxpayerInfo.taxpayerID }}
          </p>
          <p v-if="seller.taxpayerInfo.businessType" class="mt-5">
            businessType {{ seller.taxpayerInfo.businessType.title }}
          </p>
          <p class="mt-5">ID: {{ seller._id }}</p>
        </div>
        <div v-else class="">no taxpayerInfo found</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useModeStore } from '@/store/settings/mode'
import { useRegisterStore } from '@/store/auth/register'
import IconAvatar from '@/components/icons/dashboard/IconAvatar.vue'

const registerStore = useRegisterStore()

const seller = computed(() => registerStore.seller)

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)

const themeText = computed(() => (mode.value === 'light' ? 'text-black' : 'text-white'))
const themeTab = computed(() =>
  mode.value === 'light' ? 'bg-white border-b border-b-gray-200' : 'text-white'
)
const themeBg = computed(() => (mode.value === 'light' ? 'bg-white' : 'bg-[#020420]'))
const contentBg = computed(() => (mode.value === 'light' ? 'bg-white' : 'bg-[#131b30]'))
const currentTab = ref('seller_info')
const accountTabItems = ref([
  { id: 0, title: 'Seller info', title_lg: 'seller_info' },
  { id: 1, title: 'Organisation tax info', title_lg: 'tax_info' }
])

const changeTab = (tab) => {
  currentTab.value = tab.title_lg
}

function formatMongoDate(mongoDate) {
  const date = new Date(mongoDate) // Convert MongoDB date to JavaScript Date
  const day = String(date.getDate()).padStart(2, '0') // Get day and pad with 0 if needed
  const month = String(date.getMonth() + 1).padStart(2, '0') // Get month (0-based index) and pad
  const year = date.getFullYear() // Get full year

  return `${day}/${month}/${year}` // Return in DD/MM/YYYY format
}
</script>

<style scoped>
/* General tab button styling */
.tab-button {
  position: relative;
  padding: 10px 20px;
  font-size: 1rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #000000; /* Default text color */
}

/* Styling for active tab with animation */
.active-tab {
  color: #a855f7; /* Text color for active tab */
}

.tab-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px; /* Border thickness */
  width: 0; /* Initially no width */
  background-color: #a855f7; /* Border color */
  transition: width 0.3s ease; /* Transition for the width */
}

/* Expands the border when the tab is active */
.active-tab::after {
  width: 100%; /* Full width for the active tab */
}
</style>
