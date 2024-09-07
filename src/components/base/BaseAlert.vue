<template>
  <div>
    <div class="base-alert-component md:w-96 w-full rounded-xl fixed z-50 top-2 right-2">
      <TransitionGroup name="list" tag="div">
        <div class="" v-if="messages.length > 0">
          <div
            class="px-3 py-5 relative my-1 rounded"
            :class="getAlertBackground(message.type)"
            v-for="(message, index) in props.messages"
            :key="message"
          >
            <div class="flex items-cener">
              <div class="" v-if="message.type === 'Error'">
                <IconNoWiFi :stroke="'#CE2958'" v-if="message.message === 'Network Error'" />
                <IconError :stroke="'#CE2958'" v-else />
              </div>
              <IconCheckCircle v-if="message.type === 'Success'" />
              <div class="flex items-center">
                <p :style="`color: ${getTextClass(message.type)}`" class="ml-2">
                  {{ message.message }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import IconCheckCircle from '../icons/IconCheckCircle.vue'
import IconError from '../icons/IconError.vue'
import IconNoWiFi from '../icons/IconNoWiFi.vue'

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

<style scoped>
.list-enter-active,
.list-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: rotateX(90deg);
}
</style>
