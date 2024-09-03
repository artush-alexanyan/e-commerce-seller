<template>
  <div class="language-select">
    <div class="relative w-32" @mouseenter="openLanguages" @mouseleave="closeLanguages">
      <button
        type="button"
        name="Select language"
        aria-label="Select language"
        class="rounded-full px-5 py-2.5 flex items-center space-x-0.5 w-full"
        :class="mode === 'light' ? ' border-gray-400' : 'border-white'"
      >
        <IconLang :stroke="iconStroke" />
        <span :class="themeText">{{ defaultLanguage.title_lng }}</span>
      </button>
      <div
        class="dropdown-content absolute top-[56px] bg-white w-full left-0 rounded border"
        v-if="showLanguages"
      >
        <ul class="p-2.5">
          <button
            @click="selectLanguage(lang)"
            type="button"
            :name="`${lang.title}`"
            :aria-label="`${lang.title}`"
            class="mb-2.5 flex items-center space-x-1.5"
            v-for="(lang, index) in languagesList"
            :key="lang.id"
          >
            <img :src="lang.flag" class="h-5 rounded" alt="languageFlag" />
            <span
              class="text-gray-500"
              :class="defaultLanguage.title === lang.title ? 'text-purple-600' : ''"
              >{{ lang.title }}</span
            >
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import IconLang from '../icons/IconLang.vue'
import { useModeStore } from '@/store/settings/mode'
import { computed } from 'vue'

const modeStore = useModeStore()
const mode = computed(() => modeStore.mode)
const iconStroke = computed(() => (mode.value === 'light' ? '#6b7280' : '#ffffff'))
const themeText = computed(() => (mode.value === 'light' ? 'text-gray-600' : 'text-white'))
const showLanguages = ref(false)

const openLanguages = () => {
  showLanguages.value = true
}

const closeLanguages = () => {
  showLanguages.value = false
}

const defaultLanguage = ref({
  title: 'English',
  languageCode: 'en',
  id: 0,
  title_lng: 'English',
  flag: 'https://flagsapi.com/GB/flat/32.png'
})

const languagesList = ref([
  {
    title: 'English',
    languageCode: 'en',
    id: 0,
    title_lng: 'English',
    flag: 'https://flagsapi.com/GB/flat/32.png'
  },
  {
    title: 'Russian',
    languageCode: 'ru',
    id: 1,
    title_lng: 'Русский',
    flag: 'https://flagsapi.com/RU/flat/32.png'
  },
  {
    title: 'Chinese',
    languageCode: 'zh',
    id: 2,
    title_lng: '中文',
    flag: 'https://flagsapi.com/CN/flat/32.png'
  }
])

const selectLanguage = (lang) => {
  defaultLanguage.value = lang
  showLanguages.value = false
}
</script>

<style scoped>
.dropdown-content::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #e5e7eb transparent; /* Arrow border color */
}
.dropdown-content::after {
  content: '';
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent white transparent; /* Arrow background color */
}
</style>
