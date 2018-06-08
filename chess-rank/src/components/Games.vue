<template>
  <div class="Games">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(game, gameId) in games">
        {{game.toString()}}
      </li>
    </ul>
    <button v-on:click="logout">Logout</button>
    <button v-on:click="test">Test</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import Rank from '../Rank';

export default {
  name: 'Games',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      games: {}
    }
  },
  methods: {
    test: function () {
      console.log(app);
      console.log(this);
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    getGames: function () {
      var games = firebase.database().ref('games');
      games.on('child_added',
        (snapshot) => {
          console.log('child_added', snapshot.key);
          this.$fbSet(this.games, Rank.Game, snapshot);
          //this.$set(this.games, snapshot.key, Rank.Game(snapshot.val(), snapshot.key));
        }
      );
      games.on('child_changed',
        (snapshot) => {
          console.log('child_changed', snapshot.key);
          this.$fbSet(this.games, Rank.Game, snapshot);
          //this.$set(this.games, snapshot.key, snapshot.val());
        }
      );
      games.on('child_removed',
        (snapshot) => {
          console.log('child_removed', snapshot.key);
          this.$delete(this.games, snapshot.key);
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
