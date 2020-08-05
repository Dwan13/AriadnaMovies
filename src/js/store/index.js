import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        misPeliculas: [],
        misEstrenos: [],
        misPopulares: []
    },
    mutations: {
        peliculas(state, pelicula) {
            state.misPeliculas = pelicula
        },
        estrenos(state, estreno) {
            state.misEstrenos = estreno
        },
        populares(state, popular) {
            state.misPopulares = popular
        }
    },
    actions: {},
    modules: {}
})