<template>
  <div class="app flex flex-col h-screen w-full justify-between items-center">
    <nav class="flex gap-10 justify-center py-5 w-full">
      <router-link to="/">Home</router-link>
      <router-link to="/login-app">Login</router-link>
      <router-link to="/form-app">Form</router-link>
      <router-link to="/test-app">Test</router-link>
      <router-link to="/students-app">Students</router-link>
    </nav>
    <div class="content m-auto w-full">
      <router-view />
    </div>
    <footer class="text-center py-5 bg-yellow-300 w-full">
      <p>
        Bu proyektlar
        <a class="text-blue-500" href="https://github.com/shohqadamm">
          @shohqadamm
        </a>
        tomonidan yaratildi
      </p>
    </footer>
  </div>
</template>

<style>
@import './assets/index.css'
</style>
