<script setup>
import { reactive } from 'vue';
import Alert from './Alert.vue';

//states
const alert = reactive({
  type: "",
  message: ""
});

const emit = defineEmits(['update:name', 'update:email', 'update:discharge', 'update:symptoms','save-patient'])

const props = defineProps({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  discharge:{
    type: String,
    required: true
  },
  symptoms:{
    type: String,
    required: true
  }
})

const validate = () => {
  if (Object.values(props).includes('')) {
    alert.type = "error";
    alert.message = "All fields are required";
  } else {
    alert.type = "success";
    alert.message = "Saved successfully";
    emit('save-patient');
  }
}
</script>

<template>
  <div class="md:w-1/2">
    <div class="font-sans">
      <div class="relative min-h-screen flex flex-col items-center py-16">
        <div class="relative sm:max-w-sm w-full">
          <div class="card bg-color1 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div class="card bg-color2 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div class="relative w-full rounded-3xl px-6 py-4 bg-white shadow-md">
            <Alert v-if="alert.message" :alert="alert" />
            <form class="mt-10" @submit.prevent="validate">
              <div>
                <label for="name" class="block text-gray-700 uppercase font-bold">
                  Name
                </label>
                <input 
                  id="name" 
                  type="text" 
                  placeholder="Name"
                  class="mt-1 p-2 block w-full border-none bg-white h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  :value="name"
                  @input="$emit('update:name', $event.target.value)"
                  >
                  
                </div>

              <div class="mt-7">
                <label for="email" class="block text-gray-700 uppercase font-bold">
                  Email
                </label>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="Email"
                  class="mt-1 p-2 block w-full border-none bg-white h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  :value="email"
                  @input="$emit('update:email', $event.target.value)"
                >
              </div>

              <div class="mt-7">
                <label for="discharge" class="block text-gray-700 uppercase font-bold">
                  Discharge
                </label>
                <input 
                  id="date" 
                  type="date"
                  class="mt-1 p-2 block w-full border-none bg-white h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  :value="discharge"
                  @input="$emit('update:discharge', $event.target.value)"
                >
              </div>

              <div class="mt-7">
                <label for="symptoms" class="block text-gray-700 uppercase font-bold">
                  Symptoms
                </label>
                <textarea 
                id="symptoms" 
                type="text" 
                placeholder="Describe the symptoms"
                class="mt-1 p-2 h-28 block w-full border-none bg-white rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" 
                :value="symptoms"
                @input="$emit('update:symptoms', $event.target.value)"
                />
              </div>

              <div class="mt-7">
                <button
                  class="bg-color3 uppercase font-bold w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  Register patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>