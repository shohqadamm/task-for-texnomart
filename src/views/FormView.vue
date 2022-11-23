<template>
  <div class="form-app w-4/12 m-auto">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-3xl font-extralight mb-5">Form</h1>
      <form @submit.prevent="validateForm">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
            Phone
          </label>
          <input v-model="phone" :class="[isPhone == 'success' ? successClass : errClass]"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone" type="number">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input v-model="name" :class="[isName == 'success' ? successClass : errClass]"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" type="text" placeholder="John Doe">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="passport">
            Passport
          </label>
          <input v-model="passport" :class="[isPassport == 'success' ? successClass : errClass]"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline uppercase"
            id="passport" type="text" placeholder="AA0548047">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="pinfl">
            PINFL
          </label>
          <input v-model="pinfl" :class="[isPINFL == 'success' ? successClass : errClass]"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pinfl" type="number" placeholder="50511045540020">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="birth-date">
            Birth Date
          </label>
          <input v-model="birthDate" :class="[isBirthDate == 'success' ? successClass : errClass]"
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
      passport: null,
      pinfl: "",
      birthDate: null,

      errClass: "border border-red-500",
      successClass: "border border-green-500",
      isPINFL: null,
      isPhone: null,
      isName: null,
      isPassport: null,
      isBirthDate: null,
    }
  },
  watch: {
    validate(){
      this.validateForm()
    }
  },
  methods: {
    validateForm() {
      if (this.pinfl === "" || this.pinfl == null) {
        this.isPINFL = 'err'
      } else {
        this.isPINFL = 'success'
      }

      if (this.phone === "" || this.phone == null) {
        this.isPhone = 'err'
      } else {
        this.isPhone = 'success'
      }

      if (this.name === "" || this.name == null) {
        this.isName = 'err'
      } else {
        this.isName = 'success'
      }
      if (this.passport === "" || this.passport == null) {
        this.isPassport = 'err'
      } else {
        this.isPassport = 'success'
      }
      if (this.birthDate === "" || this.birthDate == null) {
        this.isBirthDate = 'err'
      } else {
        this.isBirthDate = 'success'
      }


    }
  }
}
</script>
