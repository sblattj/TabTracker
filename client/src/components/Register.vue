<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <input type="password" name="password" placeholder="password" v-model="password" />
    <br />
    <button @click="register">Register</button>

  </div>
</template>

<script>
import Auth from '@/services/AuthService'
export default {
    data() {
        return {
        email: '',
        password: ''
        }
    },
    methods: {
      async register () {
        const response = await Auth.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    }
}
</script>

<style scoped>
</style>