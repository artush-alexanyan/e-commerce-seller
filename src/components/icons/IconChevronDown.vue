<template>
  <div class="c-right">
    <svg :class="iconClass" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M9.5 10.5L12.1997 13.1997V13.1997C12.3656 13.3656 12.6344 13.3656 12.8003 13.1997V13.1997L15.5 10.5"
          :stroke="stroke"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
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
