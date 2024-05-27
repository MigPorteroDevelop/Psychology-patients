<script setup>
defineProps({
  patient:{
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p class="font-bold mb-3 text-gray-700 uppercase">ID:
      <span class="font-normal normal-case">
        {{ patient.id }}
      </span>
    </p>

    <p class="font-bold mb-3 text-gray-700 uppercase">Name:
      <span class="font-normal normal-case">
        {{ patient.name }}
      </span>
    </p>

    <p class="font-bold mb-3 text-gray-700 uppercase">Email:
      <span class="font-normal normal-case">
        {{ patient.email }}
      </span>
    </p>

    <p class="font-bold mb-3 text-gray-700 uppercase">Discharge:
      <span class="font-normal normal-case">
        {{ patient.discharge }}
      </span>
    </p>

    <p class="font-bold mb-3 text-gray-700 uppercase">Symptoms:
      <span class="font-normal normal-case">
        {{ patient.symptoms }}
      </span>
    </p>

    <div class="grid md:grid-cols-2 gap-5 mt-10">
      <button type="button"
        class="block w-full py-2 px-10 bg-color2 hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 text-white font-bold uppercase rounded-lg">
        Edit</button>

      <button type="button"
        class="block w-full py-2 px-10 bg-color1 hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 text-white font-bold uppercase rounded-lg">
        Delete</button>
    </div>
  </div>
</template>