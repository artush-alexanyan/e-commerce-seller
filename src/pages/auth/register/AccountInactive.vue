<template>
  <div class="">
    <AuthNavbar />
    <div class="mt-20">
      <div v-if="authLoading" class="md:py-40 py-20 flex items-center justify-center">
        <BaseLoader />
      </div>
      <div v-else class="seller">
        <div v-if="seller" class="seller-found">
          <div class="flex">
            <div class="w-80 border-r border-r-gray-100 h-screen">
              <div
                class=""
                :class="{ 'border-b border-b-gray-200': index < accountTabs.length - 1 }"
                v-for="(tab, index) in accountTabs"
                :key="tab.id"
              >
                <button
                  @click="changeTab(index)"
                  type="button "
                  :name="tab.title"
                  class="h-full w-full flex items-center space-x-1.5 px-5 py-4"
                  :class="{ 'bg-purple-600 text-white': index === currentTab }"
                >
                  <component :is="tab.iconComponent"></component> <span>{{ tab.title }}</span>
                </button>
              </div>
            </div>
            <div class="w-full p-5">
              <div v-if="currentTab === 0" class="account-info">
                <p>{{ seller.name }} {{ seller.lastName }}</p>

                <p>{{ seller.image ? seller.image : 'No image' }}</p>
                <p>{{ seller.status }}</p>
                <p>{{ seller.email }}</p>
                <!-- <p>=====================</p>
                <p>{{ seller }}</p> -->
              </div>
              <div v-if="currentTab === 1" class="business-info">
                {{ seller.taxpayerInfo }}
              </div>
            </div>
          </div>
        </div>
        <div v-else class="seller-not-found"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useModeStore } from '@/store/settings/mode'
import { useRegisterStore } from '@/store/auth/register'
import BaseLoader from '@/components/base/BaseLoader.vue'
import AuthNavbar from '../components/AuthNavbar.vue'
import IconAccountSettings from '@/components/icons/IconAccountSettings.vue'
import IconOrganization from '@/components/icons/IconOrganization.vue'
import IconTerminal from '@/components/icons/IconTerminal.vue'
import { shallowRef } from 'vue'

const currentTab = ref(0)
const registerStore = useRegisterStore()
const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
const authLoading = computed(() => registerStore.authLoading)
const seller = computed(() => registerStore.seller)

const accountTabs = shallowRef([
  { id: 0, title: 'Acoount info', iconComponent: IconAccountSettings, isCopmeled: false },
  { id: 1, title: 'Business info', iconComponent: IconOrganization, isCopmeled: false },
  { id: 2, title: 'Payment info', iconComponent: IconTerminal, isCopmeled: false }
])

const changeTab = (tab) => {
  currentTab.value = tab
}

onMounted(async () => {
  await registerStore.checkUserState()
})
</script>
