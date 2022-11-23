<template>
  <div class="form-app w-4/12 m-auto">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-3xl font-extralight mb-5">Form</h1>
      <form @submit.prevent="validateForm">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Phone
          </label>
          <input v-model="phone" :class="[isPhone ? successClass : errClass]"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone" type="number" placeholder="998912090511">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input v-model="name" :class="[isName ? successClass : errClass]"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" placeholder="John Doe">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="passport">
            Passport
          </label>
          <input v-model="passport" :class="[isPassport ? successClass : errClass]"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline uppercase"
            id="passport" type="text" placeholder="AA0548047">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="pinfl">
            PINFL
          </label>
          <input v-model="pinfl" :class="[isPINFL ? successClass : errClass]"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pinfl" type="number" placeholder="50511045540020">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="birth-date">
            Birth Date
          </label>
          <input v-model="birthDate" :class="[isBirthDate ? successClass : errClass]"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="birth-date" type="date">
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "FormView",
  data() {
    return {
      phone: "",
      name: null,
      passport: "",
      pinfl: "",
      birthDate: null,
      errClass: "border border-red-500",
      successClass: "border border-green-500",
    }
  },
  computed: {
    isPINFL(){
      return this.pinfl.toString().length == 14
    },
    isPhone(){
      return typeof this.phone == 'number'
    },
    isPassport(){
      return /[a-zA-Z]{2}[0-9]{7}/.test(this.passport)
    },
    isName(){
      return this.name
    },
    isBirthDate(){
      return this.birthDate
    }
  },
  methods: {
    validateForm() {
      if(this.isPINFL && this.isPhone && this.isPassport && this.isName && this.isBirthDate) {
        alert('submitted');
      }else{
        alert('fill all fields');
        console.log(this.pinfl.toString().length)
      }
    }
  }
}
</script>
