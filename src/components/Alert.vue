<script setup>
import { computed } from 'vue';

const props = defineProps({
  alert: {
    type: Object,
    required: true
  }
})

const isError = computed(() => {
  return props.alert.type === "error"
})
</script>

<template>
  <div class="text-white text-center font-bold p-3 uppercase mb-3 rounded-md"
    :class="[isError ? 'bg-red-500' : 'bg-green-500']">
    {{ alert.message }}
  </div>
</template>