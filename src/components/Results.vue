<template>
    <div class="results row d-flex justify-content-around">
        <div class="col-4 yellow">
            <h1>Results</h1>
            <ol>
                <li v-for="movie in results" v-if="movie.vote_average" @click='setActiveMovie(movie)'>{{movie.title}} :
                    {{movie.vote_average}}</li>
            </ol>
        </div>
        <details-view :movie='activeMovie' :someData="'here'"></details-view>
    </div>
</template>

<script>
    import DetailsView from '@/components/Details.vue'
    export default {
        name: '',
        data() {
            return {
                activeMovie: {}
            }
        },
        computed: {
            results() {
                let movies = this.$store.state.results
                movies.sort((a, b) => {
                    return b.vote_average - a.vote_average
                })
                return movies
            }
        },
        methods: {
            setActiveMovie(movie) {
                this.activeMovie = movie
            }
        },
        components: {
            DetailsView
        }
    }

</script>

<style>
    .yellow {
        background-color: yellow
    }
</style>