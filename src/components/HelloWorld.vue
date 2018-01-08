<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>TBF</h2>

    <h2>TestBestFest</h2>
    <input placeholder="Введите" v-model="text"/>
    <p>sdsadas{{ text }}</p>
    <button v-on:click="fetchData()">www</button>
    <p>{{ posts }}</p>



  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      text: '',
      msg: 'Welcome to Your Vue.js App',
      posts: null
    }
  },
  mounted () {
    console.log('red')
  },
  methods: {
    consoleClick () {
      console.log('click')
    },
    fetchData () {
      let blogURL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kazan%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
      let xhr = new XMLHttpRequest()
      let self = this
      xhr.open('GET', blogURL)
      xhr.onload = function () {
        self.posts = JSON.parse(xhr.responseText)
        console.log(self.posts)
      }
      xhr.send()
    }
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
