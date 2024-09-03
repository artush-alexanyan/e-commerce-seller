<template>
  <div>
    <Transition
      enter-active-class="animate__animated animate__bounceInRight"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <div
        class="base-alert-component md:w-96 w-full rounded-xl fixed z-50 top-2 right-2"
        v-if="props.messages && props.messages.length > 0"
      >
        <div
          class="px-3 py-5 relative my-1 rounded"
          :class="getAlertBackground(message.type)"
          v-for="message in props.messages"
          :key="message.type"
        >
          <div class="flex items-cener">
            <div class="flex items-center">
              <p :style="`color: ${getTextClass(message.type)}`" class="ml-2">
                {{ message.message }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const props = defineProps({
  messages: Array
})

const getAlertBackground = (message) => {
  if (message === 'Error') {
    return 'bg-[#FDF1F5]'
  } else if (message === 'Success') {
    return 'bg-[#EEFBF2]'
  } else if (message === 'Warning') {
    return 'bg-[#FFF9EB]'
  } else {
    return 'bg-[#F0FAFC]'
  }
}

const getMessageIcon = (message) => {
  if (message === 'Error') {
    return 'uil:exclamation-octagon'
  } else if (message === 'Success') {
    return 'check-circle'
  } else if (message === 'Warning') {
    return 'exclamation-octagon'
  } else {
    return 'info-circle'
  }
}
const getTextClass = (message) => {
  if (message === 'Error') {
    return '#CE2958'
  } else if (message === 'Success') {
    return '#2D935A'
  } else if (message === 'Warning') {
    return '#9E7124'
  } else {
    return '#4AB1FE'
  }
}
</script>

<style scoped></style>
