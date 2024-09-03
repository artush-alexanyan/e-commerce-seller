import { defineStore } from 'pinia'

export const useModeStore = defineStore('ModeStore', {
  state: () => ({
    mode: 'light'
  }),

  actions: {
    getCurrentMode() {
      const storageMode = localStorage.getItem('MODE')
      if (!storageMode) {
        this.mode = 'light'
      } else {
        this.mode = storageMode
      }
    },
    toggleAppMode() {
      const newMode = this.mode === 'light' ? 'dark' : 'light'
      localStorage.setItem('MODE', newMode)
      this.mode = newMode
    }
  }
})
