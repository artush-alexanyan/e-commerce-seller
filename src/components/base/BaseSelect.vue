<template>
  <div class="base-select">
    <label :for="name">{{ label }}</label>
    <select
      @change="selectItem"
      :required="required"
      class="rounded-lg border-2 border-gray-200 py-3 w-full focus:border-purple-500 outline-0 px-5 mt-2"
      :value="itemValue"
      :name="name"
      :id="id"
    >
      <option :value="item.itemValue" v-for="(item, index) in items" :key="index">
        {{ item.title || item.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: '' },
  items: { type: Array },
  name: { type: String, default: '' },
  id: { type: String, default: '' },
  itemValue: { type: String },
  required: { type: Boolean, default: true }
})

const emit = defineEmits(['select-item'])

const selectItem = (e) => {
  emit('select-item', e.target.value)
}
</script>
