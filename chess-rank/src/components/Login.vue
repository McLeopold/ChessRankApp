<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" placeholder="Email"><br />
        <input type="password" placeholder="Password"><br />
        <button v-on:click="login">Connection</button>
        <p>Create account or <router-link to="/sign-up">signup</router-link></p>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data: function() {
            return {}
        },
        methods: {
            login: function () {
                this.$router.replace('helloworld')
            }
        }
    }
</script>

<style scoped>
</style>
