<template>
  <div class="seller-menu mt-10">
    <div class="ul">
      <div class="li py-3" v-for="(item, index) in menuItems" :key="index">
        <div
          class="flex items-center justify-between"
          :class="{ 'text-purple-600': currentMenu === item.title }"
        >
          <button
            @click="changeMenu(item)"
            class="flex items-center space-x-2 text-lg"
            type="button"
            name=""
            aria-label=""
          >
            <IconCog
              :stroke="currentMenu === item.title ? '#9333ea' : '#6b7280'"
              v-if="authLoading"
              class="animate-spin"
            />
            <component
              :stroke="currentMenu === item.title ? '#9333ea' : '#6b7280'"
              v-else
              :is="item.icon"
            ></component>
            <span>{{ item.title }}</span>
          </button>
          <button
            v-if="item.hesChildren"
            name="Toggle childs"
            aria-label="Toggle"
            @click="toggleChilds(item)"
          >
            <IconChevronDown
              :stroke="currentMenu === item.title ? '#9333ea' : '#6b7280'"
              v-if="item.showChilds"
            />
            <IconChevronRight :stroke="currentMenu === item.title ? '#9333ea' : '#6b7280'" v-else />
          </button>
        </div>

        <TransitionGroup name="list" tag="div">
          <div class="ul mt-3.5" v-if="item.showChilds">
            <div class="li" v-for="(subItem, ind) in item.children" :key="ind">
              <button type="button" class="w-full h-full pl-8 text-left">
                {{ subItem.title }}
              </button>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import IconDice from '@/components/icons/dashboard/IconDice.vue'
import IconStore from '@/components/icons/dashboard/IconStore.vue'
import IconOrder from '@/components/icons/dashboard/IconOrder.vue'
import IconScan from '@/components/icons/dashboard/IconScan.vue'
import IconChevronDown from '@/components/icons/IconChevronDown.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconAccount from '@/components/icons/dashboard/IconAccount.vue'
import IconCog from '@/components/icons/IconCog.vue'
import { useRegisterStore } from '@/store/auth/register'

const registerStore = useRegisterStore()

const authLoading = computed(() => registerStore.authLoading)

const router = useRouter()
const currentMenu = ref('Dashboard')
const menuItems = shallowRef([
  {
    id: 0,
    showChilds: false,
    icon: IconDice,
    title: 'Dashboard',
    hesChildren: false,
    routePath: '/seller/dashboard'
  },
  {
    id: 1,
    showChilds: false,
    icon: IconStore,
    title: 'Store',
    hesChildren: true,
    routePath: '/seller/dashboard/store',
    children: [
      {
        id: 0,
        showChilds: false,
        icon: 'uil:store',
        title: 'Add product',
        hesChildren: false,
        routePath: '/dashboard/products/add',
        children: []
      }
    ]
  },
  {
    id: 2,
    showChilds: false,
    icon: IconOrder,
    title: 'Orders',
    hesChildren: true,
    routePath: '/seller/dashboard/orders',
    children: [
      {
        id: 0,
        showChilds: false,
        icon: 'uil:store',
        title: 'Order list',
        hesChildren: false,
        routePath: '/dashboard/orders',
        children: []
      }
    ]
  },
  {
    id: 3,
    showChilds: false,
    icon: IconScan,
    title: 'Products',
    hesChildren: true,
    routePath: '/seller/dashboard/products',
    children: [
      {
        id: 0,
        showChilds: false,
        icon: 'uil:store',
        title: 'Settings',
        hesChildren: false,
        routePath: '/dashboard/seller',
        children: []
      }
    ]
  },
  {
    id: 4,
    showChilds: false,
    icon: IconAccount,
    title: 'Account',
    hesChildren: true,
    routePath: '/seller/dashboard/account',
    children: [
      {
        id: 0,
        showChilds: false,
        icon: 'uil:store',
        title: 'Settings',
        hesChildren: false,
        routePath: '/dashboard/seller',
        children: []
      }
    ]
  }
])

const toggleChilds = (item) => {
  // Iterate over all menu items and ensure only the clicked item can have its children visible.
  // If the current menu item is not the clicked item, set its `showChilds` property to false.
  menuItems.value.forEach((menuItem) => {
    if (menuItem !== item) {
      menuItem.showChilds = false
    }
  })

  // Toggle the `showChilds` property of the clicked menu item.
  item.showChilds = !item.showChilds

  // Force reactivity to ensure the UI updates with the latest state by creating a new array reference.
  menuItems.value = [...menuItems.value]
}

const changeMenu = (item) => {
  currentMenu.value = item.title
  router.push({ path: item.routePath })
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
