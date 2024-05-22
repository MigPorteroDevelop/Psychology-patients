<script setup>
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import Patient from './components/Patient.vue';
</script>

<template>
  <div class="container mx-auto mt-20">
    <div class="mb-10">
      <Header />
    </div>
    <div class=" md:flex">
      <Form />

      <div class="md:w-1/2 md:h-screen overflow-y-scroll mx-auto">
        <Patient />
      </div>
    </div>
  </div>
</template>
