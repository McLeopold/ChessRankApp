<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="game in games">
        {{game}}
      </li>
    </ul>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Games',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      games: []
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    getGames: function () {
      firebase.database().ref('games').on('child_added',
        (snapshot) => {
          this.games.push(snapshot.val());
        }
      );
    }
  },
  created () {
    this.getGames();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
