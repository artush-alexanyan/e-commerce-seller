<template>
  <div class="icon-scan">
    <svg :class="iconClass" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 18.7712 2 15"
          :stroke="stroke"
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>
        <path
          d="M22 15C22 18.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22"
          :stroke="stroke"
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>
        <path
          d="M14 2C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 5.22876 22 9"
          :stroke="stroke"
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>
        <path
          d="M10 2C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 5.22876 2 9"
          :stroke="stroke"
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>
        <path d="M2 12H22" :stroke="stroke" stroke-width="1.5" stroke-linecap="round"></path>
      </g>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  stroke: {
    type: String,
    default: '#6b7280'
  },
  iconClass: {
    type: String,
    default: 'h-7'
  }
})
</script>
