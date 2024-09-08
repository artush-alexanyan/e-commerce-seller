<template>
  <div>
    <div class="" v-if="seller">
      <div
        @mouseenter="openUserInfo"
        @mouseleave="closeUserInfo"
        class="flex items-center space-x-2.5 relative"
        :class="[themeText, themeBg]"
      >
        <div class="wrapper">
          <img
            v-if="seller.avatar"
            :src="seller.avatar"
            alt="avatar"
            class="h-9 w-9 rounded-full border border-gray-200 object-cover"
          />
          <!-- <div
            v-else
            class="h-9 w-9 rounded-full border-2 border-gray-400 flex items-center justify-center"
          >
            <IconAvatar :icon-class="'h-7'" />
          </div> -->
          <img
            :src="`https://ui-avatars.com/api/?name=${seller.name} + ${seller.lastName}`"
            alt="avatar-placeholder"
            class="h-9 w-9 rounded-full"
          />
          <div
            v-if="showUserDropdown"
            :data-mode="mode"
            class="dropdown-content shadow-sm absolute top-12 right-0 w-40 p-5 rounded-xl transition-all duration-500"
            :class="[themeText, dropdownBg]"
          >
            <div class="">
              <p class="text-center text-lg narko">{{ seller.name }} {{ seller.lastName }}</p>
            </div>
          </div>
        </div>
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
const modeStore = useModeStore()

const seller = computed(() => registerStore.seller)
const mode = computed(() => modeStore.mode)
const themeText = computed(() => (mode.value === 'light' ? 'text-black' : 'text-white'))
const themeBg = computed(() => (mode.value === 'light' ? 'bg-white' : 'bg-[#020420]'))
const dropdownBg = computed(() => (mode.value === 'light' ? 'bg-white' : 'bg-[#131b30]'))
const showUserDropdown = ref(false)

const openUserInfo = () => {
  showUserDropdown.value = true
}
const closeUserInfo = () => {
  showUserDropdown.value = false
}
</script>

<style scoped>
.dropdown-content::before {
  content: '';
  position: absolute;
  top: -19px;
  right: 2%;
  transform: translateX(-50%);
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #ffffff transparent;
}

.dropdown-content[data-mode='light']::before {
  border-color: transparent transparent #ffffff transparent;
}

.dropdown-content[data-mode='dark']::before {
  border-color: transparent transparent #131b30 transparent;
}
</style>
