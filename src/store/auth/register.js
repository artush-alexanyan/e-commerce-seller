import { defineStore } from 'pinia'
import router from '@/router'
import API from '@/api/api'

export const useRegisterStore = defineStore('RegisterStore', {
  state: () => ({
    stepOneLoading: false,
    seller: null,
    authLoading: false,
    registerMessages: [],
    taxLoading: false,
    loginLoading: false
  }),
  actions: {
    resetMessages() {
      setTimeout(() => {
        this.registerMessages = []
      }, 2500)
    },
    handelMessages(message, type) {
      this.registerMessages.push({
        message,
        type
      })
      this.resetMessages()
    },
    async checkUserState() {
      this.authLoading = true
      try {
        const response = await API.get('/auth/checkAuth')
        this.authLoading = false
        this.seller = response.data.seller

        // console.log(this.seller.status)
        // const protectedRoutes = ['registration', 'email_verification', 'taxpayer_info', 'payment_verification']
        // const currentPath = router.currentRoute.value.fullPath
        // const matchedRoutes = protectedRoutes.filter(item => currentPath.includes(item))
        // const routeEndpoit = matchedRoutes[0]
        // console.log("routeEndpoit", routeEndpoit)
        // const nextRouteIndex = protectedRoutes.indexOf(routeEndpoit) + 1
        // console.log("nextRouteIndex", nextRouteIndex)
        // console.log("isOnProtectedRoute", matchedRoutes)
      } catch (error) {
        console.log("login error", error)
        this.authLoading = false
        const message = error.response ? error.response.data.message : error.message
        this.handelMessages(message, 'Error')
      }
    },
    async loginSeller(email, password) {
      this.loginLoading = true
      try {
        const response = await API.post('/auth/login', {
          email,
          password
        })
        this.loginLoading = false
        const message = `Welcome back ${response.data.seller.name} ${response.data.seller.lastName}`
        this.handelMessages(message, 'Success')
        const sellerStatus = response.data.seller.status
        const protectedRoutes = [
          'registration',
          'email_verification',
          'taxpayer_info',
          'payment_verification'
        ]

        const matchedRoutes = protectedRoutes.filter((item) => sellerStatus === item)
        if (matchedRoutes.length === 0) {
          return
        }
        const routeEndpoit = matchedRoutes[0]
        const nextRouteIndex = protectedRoutes.indexOf(routeEndpoit) + 1
        const nextRouteEndpoint = protectedRoutes[nextRouteIndex]
        setTimeout(() => {
          router.push({ path: `/auth/register/${nextRouteEndpoint}` })
        }, 2000);
      } catch (error) {
        this.loginLoading = false
        console.error(error.response ? error.response.message : error.message)
        const message = error.response ? error.response.data.message : error.message
        this.handelMessages(message, 'Error')
      }
    },
    async submitFirstStep(name, lastName, email, phone, password) {
      try {
        this.stepOneLoading = true
        const response = await API.post('/auth/register', {
          name,
          lastName,
          email,
          phone,
          password
        })
        console.log('Seller:', response.data.seller.name)
        this.stepOneLoading = false
        this.handelMessages(response.data.message, 'Success')

        setTimeout(() => {
          router.push({ path: '/auth/register/email_verification' })
        }, 2500)
      } catch (error) {
        this.stepOneLoading = false
        const message = error.response ? error.response.data.message : error.message
        this.handelMessages(message, 'Error')
      }
    },
    async saveTaxpayerInfo(taxpayerID, taxCountry, businessType, businessName) {
      const sellerId = this.seller._id
      try {
        this.taxLoading = true
        const response = await API.post(`/auth/sellers/${sellerId}/taxpayer-info`, {
          taxpayerID,
          taxCountry,
          businessType,
          businessName
        })
        console.log('tax info:', response.data)
        this.taxLoading = false
        this.handelMessages(response.data.message, 'Success')

        setTimeout(() => {
          router.push({ path: '/auth/register/payment_verification' })
        }, 2500)
      } catch (error) {
        this.taxLoading = false
        const message = error.response ? error.response.data.message : error.message
        this.handelMessages(message, 'Error')
      }
    }
  }
})
