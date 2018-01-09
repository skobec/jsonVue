<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>TBF</h2>

    <h2>TestBestFest</h2>
    <input placeholder="Введите" v-model="text"/>
    <p>sdsadas{{ text }}</p>
    <p v-if="posts !== null">rererrrr</p>
    {{cityName}}
    <div v-show="loading">loading suka</div>
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
      posts: null,
      loading: false
    }
  },
  mounted () {
    console.log('red')
  },
  computed: {
    cityName () {
      return this.$store.state.data.location ? this.$store.state.data.location.city : 'Хуй'
    }
  },
  methods: {
    consoleClick () {
      console.log('click')
    },
    fetchData () {
      this.loading = true
      this.$store.dispatch('getWeather')
        .then(res => {
          console.log('ok')
          this.loading = false
        })
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
