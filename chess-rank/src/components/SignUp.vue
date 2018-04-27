<template>
    <div class="sign-up">
        <p>create account</p>
        <input type="text" placeholder="Email"><br />
        <input type="password" placeholder="Password"><br />
        <button>Sign Up</button>
        <span>or go back to <router-link to="/login">login</router-link></span>
    </div>
</template>

<script>
    export default {
        name: 'signUp',
        data: function() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
  .signUp {
    margin-top: 40px;
  }
</style>
