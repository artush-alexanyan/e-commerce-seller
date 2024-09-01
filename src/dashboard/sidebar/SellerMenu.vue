<template>
  <div class="seller-menu mt-10">
    <div class="ul">
      <div class="li my-5" v-for="(item, index) in menuItems" :key="index">
        <div class="flex items-center justify-between">
          <button
            @click="changeMenu(item)"
            class="flex items-center space-x-2 text-lg"
            type="button"
            name=""
            aria-label=""
          >
            <!-- <Icon :name="item.icon" style="color: #883ae1" size="1.5rem" /> -->
            <span>{{ item.title }}</span>
          </button>
          <button name="Toggle childs" aria-label="Toggle" @click="toggleChilds(item)">
            <!-- <Icon
              :name="item.showChilds ? 'uil:angle-up' : 'uil:angle-down'"
              style="color: gray"
              size="1.5rem"
            /> -->
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
import { useRouter } from '#app'

const router = useRouter()

const menuItems = ref([
  {
    id: 0,
    showChilds: false,
    icon: 'uil:store',
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
    id: 1,
    showChilds: false,
    icon: 'uil:truck',
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
    id: 1,
    showChilds: false,
    icon: 'uil:user',
    title: 'Seller',
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
  menuItems.value.forEach((menuItem) => {
    if (menuItem !== item) {
      menuItem.showChilds = false
    }
  })

  item.showChilds = !item.showChilds
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
