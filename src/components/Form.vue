<script setup>
</script>

<template>
  <div class="md:w-1/2">
    <div class="font-sans">
      <div class="relative min-h-screen flex flex-col items-center py-16">
        <div class="relative sm:max-w-sm w-full">
          <div class="card bg-color1 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div class="card bg-color2 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">

            <form method="#" action="#" class="mt-10">
              <div>
                <label for="name" class="block text-gray-700 uppercase font-bold">
                  Name
                </label>
                <input type="text" placeholder="Name"
                  class="mt-1 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              </div>

              <div class="mt-7">
                <label for="email" class="block text-gray-700 uppercase font-bold">
                  Email
                </label>
                <input type="email" placeholder="Email"
                  class="mt-1 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              </div>

              <div class="mt-7">
                <label for="discharge" class="block text-gray-700 uppercase font-bold">
                  Discharge
                </label>
                <input type="date"
                  class="mt-1 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              </div>

              <div class="mt-7">
                <label for="symptoms" class="block text-gray-700 uppercase font-bold">
                  Symptoms
                </label>
                <textarea type="text" placeholder="Describe the symptoms"
                  class="mt-1 p-2 h-40 block w-full border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
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