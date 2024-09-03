<template>
  <div class="seller-menu mt-10">
    <div class="ul">
      <div class="li py-3" v-for="(item, index) in menuItems" :key="index">
        <div class="flex items-center justify-between">
          <button
            @click="changeMenu(item)"
            class="flex items-center space-x-2 text-lg"
            type="button"
            name=""
            aria-label=""
          >
            <component :is="item.icon"></component>
            <span>{{ item.title }}</span>
          </button>
          <button
            v-if="item.hesChildren"
            name="Toggle childs"
            aria-label="Toggle"
            @click="toggleChilds(item)"
          >
            <IconChevronDown v-if="item.showChilds" />
            <IconChevronRight v-else />
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
import { ref, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import IconDice from '@/components/icons/dashboard/IconDice.vue'
import IconStore from '@/components/icons/dashboard/IconStore.vue'
import IconOrder from '@/components/icons/dashboard/IconOrder.vue'
import IconScan from '@/components/icons/dashboard/IconScan.vue'
import IconChevronDown from '@/components/icons/IconChevronDown.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'

const router = useRouter()

const menuItems = shallowRef([
  {
    id: 0,
    showChilds: false,
    icon: IconDice,
    title: 'Dashboard',
    hesChildren: false,
    routePath: '/dashboard/products'
  },
  {
    id: 1,
    showChilds: false,
    icon: IconStore,
    title: 'Store',
    hesChildren: true,
    routePath: '/dashboard/products',
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
    routePath: '/dashboard/orders',
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
    routePath: '/dashboard/seller',
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
