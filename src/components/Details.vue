<template>
    <div class="details col-7 yellow">
        <h1>{{movie.title}}</h1>
        <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="">
    </div>
</template>

<script>
    export default {
        name: 'Details',
        props: ['movie'],
        data() {
            return {

            }
        },
        computed: {},
        methods: {}
    }

</script>

<style>

</style>