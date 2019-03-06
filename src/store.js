import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// let _movieApi = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=',
//   timeout: 3000
// })

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: [],
    activeSong: {}
  },
  mutations: {
    setResults(state, data) {
      state.results = data
    },
    setActiveSong(state, song){
      state.activeSong = song
    }
  },
  actions: {
    getMusicByArtist({ commit }, artist) {
      var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
      $.getJSON(url)
        .then(res => {
          commit('setResults', res.results)
        })
        .catch(err => console.log(err))
    },
    setActiveSong({ commit }, song) {
      // commit mutation --- mutation needs to add active song to state.
      commit('setActiveSong', song)
    }

}
})