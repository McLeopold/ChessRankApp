// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import config from './config'

Vue.config.productionTip = false

let app;
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});

window.fb = firebase;

var Rank = {};

var ranks = firebase.database().ref('/ranks');
Rank.createRank = function (name) {
  var uid = firebase.auth().currentUser.uid;
  var rankObj = {
    owner: uid,
    type: 'ELO',
    users: {},
    games: {},
  };
  rankObj.users[uid] = {
    skill: 1500
  }
  console.log(rankObj);
  ranks.child(name).set(rankObj);
}

Rank.addUser = function (rankName, uid) {
  ranks.child(rankName).child('users').child(uid).set({
    rank: 1500
  });
}

window.Rank = Rank;


