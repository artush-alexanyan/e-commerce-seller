<template>
  <div class="flex flex-col items-start">
    <label :class="themeText" v-if="type !== 'checkbox'" class="mb-2" :for="name">{{
      label
    }}</label>
    <div class="relative w-full">
      <div class="absolute z-20 top-1/2 transform -translate-y-1/2 left-1.5">
        <slot name="input-icon"></slot>
      </div>

      <div class="absolute z-20 top-1/2 transform -translate-y-1/2 right-3.5">
        <slot name="input-icon-right"></slot>
      </div>

      <input
        :value="type === 'checkbox' ? undefined : modelValue"
        @input="updateModelValue"
        :required="required"
        :type="type"
        :name="name"
        :id="id"
        :placeholder="placeholder"
        :class="[inputClass, inputBg]"
        class="rounded-lg border-2 py-3.5 w-full focus:border-purple-500 outline-0 transition-all duration-300"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useModeStore } from '@/store/settings/mode'

const props = defineProps({
  modelValue: { type: [String, Number, Boolean], default: '' },
  label: { type: String, default: '' },
  type: { type: String, default: '' },
  name: { type: String, default: '' },
  id: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  inputClass: { type: String, default: 'pl-9 pr-5' },
  iconName: { type: String, default: 'uil:user' },
  iconSize: { type: String, default: '1.5rem' },
  required: { type: Boolean, default: true },
  iconStyle: {
    type: Object,
    default: () => ({
      color: '#9ca3af'
    })
  }
})

const emit = defineEmits(['update:modelValue'])

const updateModelValue = (e) => {
  const value = props.type === 'checkbox' ? e.target.checked : e.target.value
  emit('update:modelValue', value)
}

const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)
const themeText = computed(() => (mode.value === 'light' ? 'text-primary' : 'text-slate-500'))
const inputBg = computed(() =>
  mode.value === 'light' ? 'bg-white border-gray-200' : 'border-slate-500 bg-[#131b30]'
)
</script>
