<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(game, gameId) in games">
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
      games: {}
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    getGames: function () {
      var that = this;
      var games = firebase.database().ref('games');
      games.on('child_added',
        (snapshot) => {
          console.log('child_added', snapshot.key);
          that.$set(that.games, snapshot.key, snapshot.val());
        }
      );
      games.on('child_changed',
        (snapshot) => {
          console.log('child_changed', snapshot.key);
          that.$set(that.games, snapshot.key, snapshot.val());
        }
      );
      games.on('child_removed',
        (snapshot) => {
          console.log('child_removed', snapshot.key);
          that.$delete(that.games, snapshot.key);
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
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
