<template>
  <div class="form-app w-4/12 m-auto">
    <!-- <div v-if="user">
      <h1>Salom {{ user.username }}!</h1>
      <form @submit.prevent="logoutUser">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Chiqish
        </button>
      </form>
    </div> -->
    <p>login: mod</p>
    <p>parol: 12345678</p>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-3xl font-extralight mb-5">Login</h1>
      <form @submit.prevent="loginUser">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="login">
            Login
          </label>
          <input v-model="login"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="login" type="text" placeholder="@login">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="********">
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
import axios from 'axios'
export default {
  name: "LoginView",
  data() {
    return {
      login: '',
      password: '',
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    async loginUser() {
      if (this.login && this.password) {
      let user = {
        username: this.login,
        password: this.password
      }
      // await axios.post('http://localhost:8080/api/auth/signin', user).then(res => {
      await axios.post('https://shohqadam-usersdb.onrender.com/api/auth/signin', user).then(res => {
        if (res.status === 200) {
          localStorage.setItem('user', JSON.stringify(res.data))
          this.$router.push('login-app-user')
        }
      })
      } else {
        alert('please fill all fields')
      }
    },
  },
}
</script>
  