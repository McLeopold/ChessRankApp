<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"><br />
        <input type="password" v-model="password" placeholder="Password"><br />
        <button v-on:click="signIn">Connection</button>
        <p>Create account or <router-link to="/sign-up">signup</router-link></p>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'login',
        data: function() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signIn: function () {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    function(user) {
                        console.log('Connected');
                    },
                    function (err) {
                        console.log('Opps: ' + err.message);
                    }
                )
            }
        }
    }
</script>

<style scoped>
</style>
