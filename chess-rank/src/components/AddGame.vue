<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <label>Game Name</label>
        <input class="standard" v-model="gameName" placeholder="Add the game name">
      </li>
      <li>
        <label>Color</label>
        <input class="standard" v-model="color" placeholder="Player color">
      </li>
      <li>
        <label>User</label>
        <input class="standard" v-model="user" placeholder="Player name">
      </li>
      <li>
        <button v-on:click="addGame">Add</button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'AddGame',
  data () {
    return {
      msg: 'Add A Game!',
      gameName: '',
      color: '',
      user:'',
    }
  },
  methods: {
    addGame: function(){
      var games = firebase.database().ref('games'),
      color = this.$data.color,
      user = this.$data.user,
      name = this.$data.gameName;

      var data = {};
      data[color] = user;


      games.child(name).set(data);
      console.log(firebase.database().ref('games'));
      console.log(this.$data.gameName);
      console.log(this.$data.color);
      console.log(this.$data.user);
    }
  },
  created () {
    //this.getGames();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
label{
  display:block;
  padding-bottom:10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin:10px 0 15px;

}
a {
  color: #42b983;
}
input.standard{
  width:200px;
  padding:10px;
}
</style>
