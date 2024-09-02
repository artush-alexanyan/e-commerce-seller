<template>
  <div class="language-select">
    <div class="relative" @mouseenter="openLanguages" @mouseleave="closeLanguages">
      <button
        type="button"
        name="Select language"
        aria-label="Select language"
        class="rounded-lg border border-gray-200 px-5 py-2.5 flex items-center space-x-2"
      >
        <IconGlobe />
        <span>{{ defaultLanguage.title }}</span>
      </button>
      <div
        class="absolute top-12 bg-white w-full left-0 rounded-xl border border-gray-200"
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
import IconGlobe from '../icons/IconGlobe.vue'

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
  title_lng: 'Title in English',
  flag: 'https://flagsapi.com/GB/flat/32.png'
})

const languagesList = ref([
  {
    title: 'English',
    languageCode: 'en',
    id: 0,
    title_lng: 'Title in English',
    flag: 'https://flagsapi.com/GB/flat/32.png'
  },
  {
    title: 'Russian',
    languageCode: 'ru',
    id: 1,
    title_lng: 'Заголовок на русском',
    flag: 'https://flagsapi.com/RU/flat/32.png'
  },
  {
    title: 'Chinese',
    languageCode: 'zh',
    id: 2,
    title_lng: '标题中文',
    flag: 'https://flagsapi.com/CN/flat/32.png'
  }
])

const selectLanguage = (lang) => {
  defaultLanguage.value = lang
  showLanguages.value = false
}
</script>
