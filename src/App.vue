<script setup>
import { ref, reactive, watch, onMounted } from 'vue';
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
}

//Save in LocalStorage
watch(patients, () => {
  saveLocalStorage();
}, {
  //access every atribute of cart
  deep:true
})

//LocalStorage only save strings
const saveLocalStorage = () => {
  localStorage.setItem('patients', JSON.stringify(patients.value))
}

//persistence
onMounted(() => {
  const patientsStorage = localStorage.getItem('patients');

  if(patientsStorage){
    patients.value = JSON.parse(patientsStorage)
  }
})
</script>

<template>
  <div class="container mx-auto mt-10">
    <div class="mb-10">
      <Header />
    </div>
    <div class="lg:flex">
      <div class="md:w-1/2 md:h-screen mx-auto">
        <Form 
        v-model:name="patient.name"
        v-model:email="patient.email"
        v-model:discharge="patient.discharge"
        v-model:symptoms="patient.symptoms" 
        @save-patient = "savePatient"
        :id="patient.id"
        />
      </div>
      <div class="md:w-1/2 md:h-screen overflow-y-scroll mx-auto">
        <div v-if="patients.length > 0">
          <Patient 
            v-for="patient in patients"
            :patient="patient"
            @update-patient="updatePatient"
            @delete-patient="deletePatient"
          />
        </div>
        <p v-else class="my-16 sm:my-0 text-center text-2xl font-bold uppercase">No patients</p>
      </div>
    </div>
  </div>
</template>
