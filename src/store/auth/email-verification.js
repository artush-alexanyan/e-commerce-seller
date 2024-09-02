import { defineStore } from 'pinia'
import router from '@/router'
import API from '@/api/api'
import { useRegisterStore } from './register'

export const useEmailStore = defineStore('EmailStore', {
  state: () => ({
    emailVerifying: false,
    emailSending: false,
    emailMessages: []
  }),

  actions: {
    resetMessages() {
      setTimeout(() => {
        this.emailMessages = []
      }, 2500)
    },
    handelMessages(message, type) {
      this.emailMessages.push({
        message,
        type
      })
      this.resetMessages()
    },
    async getSellerEmail() {
      const registerStore = useRegisterStore()
      await registerStore.checkUserState()
      return registerStore.seller ? registerStore.seller.email : null
    },
    async verifyEmail(code) {
      this.emailVerifying = true
      const email = await this.getSellerEmail()
      if (!email) {
        this.handelMessages('Please relogin to continue', 'Error')
        return
      }
      try {
        const response = await API.post('/auth/verify-email', { code, email })
        this.handelMessages(response.data.message, 'Success')
        this.emailVerifying = false
        router.push('/auth/register/taxpayer_info')
      } catch (error) {
        this.emailVerifying = false
        const message = error.response ? error.response.data.message : error.message
        this.handelMessages(message, 'Error')
      }
    },
    async sendVerificatioEmail() {
      this.emailSending = true
      const email = await this.getSellerEmail()
      if (!email) {
        this.handelMessages('Please relogin to continue', 'Error')
        return
      }
      try {
        const response = await API.post('/auth/send-verification-email', { email })
        console.log('response.data.message', response.data.message)
        this.handelMessages(response.data.message, 'Success')
        this.emailSending = false
      } catch (error) {
        this.emailSending = false
        const message = error.response ? error.response.data.message : error.message
        this.handelMessages(message, 'Error')
      }
    }
  }
})
