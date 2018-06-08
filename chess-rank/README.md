# chess-rank

> Chess Rank

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

./config.js is required for the specific firebase endpoint (not in repo), including api secrets, and is .gitignore(d).

Check the firebase console and use the "Add firebase to your web app" quickstart, in the script section. Something like:

```
var config = {
  apiKey: "ThisIsabigLongStringasdljfasldjf",
  authDomain: "chessrank-5dc6c.firebaseapp.com",
  databaseURL: "https://chessrank-12345.firebaseio.com",
  projectId: "chessrank-12345",
  storageBucket: "chessrank-12345.appspot.com",
  messagingSenderId: "123456789"
};
export default config;
```
