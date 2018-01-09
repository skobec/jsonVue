import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: {}
  },
  mutations: {
    setData (state, posts) {
      state.data = posts
    }
  },
  actions: {
    getWeather ({commit}) {
      return new Promise((resolve, reject) => {
        let blogURL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kazan%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
        let xhr = new XMLHttpRequest()
        xhr.open('GET', blogURL)
        xhr.onload = function () {
          const posts = JSON.parse(xhr.responseText)
          console.log(posts)
          commit('setData', posts['query']['results']['channel'])
          return resolve(posts)
        }
        xhr.send()
      })
    }
  }
})

export default store
