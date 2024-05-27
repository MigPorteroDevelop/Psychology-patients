<script setup>
import { ref, reactive } from 'vue';
import { uid } from 'uid';
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import Patient from './components/Patient.vue';
import Alert from './components/Alert.vue';

const patients = ref([]);

const patient = reactive({
  id: null,
  name: "",
  email: "",
  discharge: "",
  symptoms: ""
});

const savePatient = () => {
  if(patient.id){
    //destructuring
    const { id } = patient; 
    //Find index in array patients
    const i = patients.value.findIndex((patientState) => patientState.id === id)
    //We replace the existing patient with the updated copy with {...}
    patients.value[i] = {...patient}
  }else{
    patients.value.push({
    //Create a copy with spread operator
    //Unique patient object is created and then the object is reseted
    ...patient,
    id: uid()
    })
  }

  //Reset
  Object.assign(patient, {
    id: null,
    name: '',
    email: '',
    discharge: '',
    symptoms: ''
  })
}

//Pass info to patient component
const updatePatient = (id) => {
  const newInfoPatient = patients.value.filter(patient => patient.id === id)[0]
  Object.assign(patient, newInfoPatient)
}

const deletePatient = (id) => {
  patients.value = patients.value.filter(patient => patient.id !== id)
  console.log(patients.value)
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
      :id="patient.id"
      />

      <div class="md:w-1/2 md:h-screen overflow-y-scroll mx-auto">
        <div v-if="patients.length > 0">
          <Patient 
            v-for="patient in patients"
            :patient="patient"
            @update-patient="updatePatient"
            @delete-patient="deletePatient"
          />
        </div>
        <p v-else class="mt-10 text-center text-2xl font-bold uppercase">No patients</p>
      </div>
    </div>
  </div>
</template>
