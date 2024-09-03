<template>
  <div class="c-right">
    <svg :class="iconClass" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Arrow / Chevron_Right_MD">
          <path
            id="Vector"
            d="M10 8L14 12L10 16"
            :stroke="stroke"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
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
