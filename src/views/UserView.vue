<template>
    <div>
        <h1>Salom {{ user.username }}!</h1>
        <form @submit.prevent="logoutUser">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Chiqish
            </button>
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem("user")),
        }
    },
    methods: {
        async logoutUser() {
            await axios.post('https://shohqadam-usersdb.onrender.com/api/auth/signout').then(res => {
                if (res.status === 200) {
                    localStorage.removeItem('user')
                    this.$router.push('/')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>