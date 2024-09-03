<template>
  <div class="org">
    <svg
      :class="iconClass"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xml:space="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <circle style="fill: #b5f1f4" cx="256" cy="256" r="256"></circle>
        <path
          style="fill: #84dbff"
          d="M510.581,283.026L312.889,85.333c0.862,0.862-113.778,227.556-113.778,227.556l0,0 c0,0-57.547,114.436-56.889,113.778l83.547,83.547C235.686,511.381,245.77,512,256,512C388.256,512,497.078,411.705,510.581,283.026 z"
        ></path>
        <rect x="199.111" y="85.333" style="fill: #324a5e" width="113.778" height="341.333"></rect>
        <rect x="257.155" y="85.333" style="fill: #2b3b4e" width="55.734" height="341.333"></rect>
        <rect x="142.222" y="227.556" style="fill: #f9b54c" width="113.778" height="199.111"></rect>
        <rect x="199.111" y="227.556" style="fill: #f4a200" width="56.889" height="199.111"></rect>
        <g>
          <rect x="215.488" y="105.158" style="fill: #f4e3c3" width="81.024" height="18.963"></rect>
          <rect x="215.488" y="143.084" style="fill: #f4e3c3" width="81.024" height="18.963"></rect>
          <rect x="215.488" y="181.01" style="fill: #f4e3c3" width="81.024" height="18.963"></rect>
        </g>
        <g>
          <rect x="257.155" y="105.158" style="fill: #fed8b2" width="39.362" height="18.963"></rect>
          <rect x="257.155" y="143.084" style="fill: #fed8b2" width="39.362" height="18.963"></rect>
          <rect x="257.155" y="181.01" style="fill: #fed8b2" width="39.362" height="18.963"></rect>
        </g>
        <rect x="284.444" y="170.667" style="fill: #fc6f58" width="113.778" height="256"></rect>
        <rect x="342.195" y="170.667" style="fill: #f1543f" width="56.027" height="256"></rect>
        <g>
          <rect x="298.667" y="188.337" style="fill: #f9b54c" width="28.444" height="28.444"></rect>
          <rect x="355.556" y="188.337" style="fill: #f9b54c" width="28.444" height="28.444"></rect>
          <rect x="298.667" y="233.693" style="fill: #f9b54c" width="28.444" height="28.444"></rect>
          <rect x="355.556" y="233.693" style="fill: #f9b54c" width="28.444" height="28.444"></rect>
          <rect x="298.667" y="279.049" style="fill: #f9b54c" width="28.444" height="28.444"></rect>
          <rect x="355.556" y="279.049" style="fill: #f9b54c" width="28.444" height="28.444"></rect>
          <rect x="298.667" y="324.422" style="fill: #f9b54c" width="28.444" height="28.444"></rect>
          <rect x="355.556" y="324.422" style="fill: #f9b54c" width="28.444" height="28.444"></rect>
          <rect x="298.667" y="369.778" style="fill: #f9b54c" width="28.444" height="28.444"></rect>
          <rect x="355.556" y="369.778" style="fill: #f9b54c" width="28.444" height="28.444"></rect>
        </g>
        <g>
          <rect x="158.599" y="246.519" style="fill: #f4e3c3" width="81.024" height="18.963"></rect>
          <rect x="158.599" y="284.444" style="fill: #f4e3c3" width="81.024" height="18.963"></rect>
          <rect x="158.599" y="322.37" style="fill: #f4e3c3" width="81.024" height="18.963"></rect>
        </g>
        <g>
          <rect x="199.111" y="246.519" style="fill: #fed8b2" width="40.512" height="18.963"></rect>
          <rect x="199.111" y="284.444" style="fill: #fed8b2" width="40.512" height="18.963"></rect>
          <rect x="199.111" y="322.37" style="fill: #fed8b2" width="40.512" height="18.963"></rect>
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
