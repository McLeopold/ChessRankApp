<template>
    <div class="login">
        <div>
            <h3>Sign In</h3>
            <input type="text" v-model="email" placeholder="Email"><br />
            <input type="password" v-model="password" placeholder="Password"><br />
            <button v-on:click="signIn">Connection</button>
            <p>Create account or <router-link to="/sign-up">signup</router-link></p>
        </div>
        <div>
            <h3>Sign In With Google</h3>
            <button v-on:click="signInGoogle">Google</button>
        </div>
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
                    (user) => {
                        this.$router.replace('games')
                    },
                    (err) => {
                        console.log('Opps: ' + err.message);
                    }
                )
            },
            signInGoogle: function () {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithRedirect(provider)
                    .then((result) => {
                        this.$router.replace('games')
                    })
                    .catch((error) => {
                        console.log('Oops ' + error.message);
                    });
            }
        }
    }
</script>

<style scoped>
</style>
