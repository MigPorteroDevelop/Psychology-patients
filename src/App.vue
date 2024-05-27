<script setup>
import { ref, reactive } from 'vue';
import { uid } from 'uid';
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import Patient from './components/Patient.vue';

const patients = ref([]);

const patient = reactive({
  id: null,
  name: "",
  email: "",
  discharge: "",
  symptoms: ""
});

const savePatient = () => {
  patients.value.push({
    //Create a copy with spread operator
    //Unique patient object is created and then the object is reseted
    //
    ...patient,
    //We add the id later, so, we don't add down for reset
    id: uid()
  })

  patient.name= "",
  patient.email= "",
  patient.discharge= "",
  patient.symptoms= ""
}

</script>

<template>
  <div class="container mx-auto mt-10">
    <div class="mb-10">
      <Header />
    </div>
    <div class="md:flex">
      <Form 
      v-model:name="patient.name"
      v-model:email="patient.email"
      v-model:discharge="patient.discharge"
      v-model:symptoms="patient.symptoms" 
      @save-patient = "savePatient"
      />

      <div class="md:w-1/2 md:h-screen overflow-y-scroll mx-auto">
        <div v-if="patients.length > 0">
          <Patient 
            v-for="patient in patients"
            :patient="patient"
          />
        </div>
        <p v-else class="mt-10 text-center text-2xl font-bold uppercase">No patients</p>
      </div>
    </div>
  </div>
</template>
