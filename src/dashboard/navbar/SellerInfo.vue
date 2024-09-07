<template>
  <div>
    <div class="" v-if="seller">
      <div class="flex items-center space-x-2.5">
        <p class="text-center text-lg narko">{{ seller.name }} {{ seller.lastName }}</p>
        <div class="wrapper">
          <img
            v-if="seller.avatar"
            :src="seller.avatar"
            alt="avatar"
            class="h-9 w-9 rounded-full border border-gray-200 object-cover"
          />
          <div
            v-else
            class="h-9 w-9 rounded-full border-2 border-gray-400 flex items-center justify-center"
          >
            <IconAvatar :icon-class="'h-7'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useModeStore } from '@/store/settings/mode'
import { useRegisterStore } from '@/store/auth/register'
import IconAvatar from '@/components/icons/dashboard/IconAvatar.vue'

const registerStore = useRegisterStore()
const modeStore = useModeStore()

const seller = computed(() => registerStore.seller)
const mode = computed(() => modeStore.mode)
</script>
