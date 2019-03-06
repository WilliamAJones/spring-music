<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <details-view :song='activeSong'></details-view>
        </div>
        <div class="col-sm-12 card col-3 mx-3" v-for="song in results" v-if="song.kind == 'song'" @click='setActiveSong(song)'>
            {{song.trackName}}
            <br>
            <img :src="song.artworkUrl100">
        </div>


    </div>
</template>

<script>
    import DetailsView from '@/components/Details.vue'
    export default {
        name: '',
        data() {
            return {
                activeSong: {}
            }
        },
        computed: {
            results() {
                let songs = this.$store.state.results

                return songs
            }
        },
        methods: {
            setActiveSong(song) {
                let activeSong = this.song
                // dispatch song to state 
                this.$store.dispatch('setActiveSong', song)
            }
        },
        components: {
            DetailsView
        }
    }

</script>

<style>
  
.card {
        background-color: transparent;
        display: flex;
        align-items: center !important;
        text-shadow: -1px -1px gray;
        color: rgba(255, 0, 0, 0.068);
        border-top-color: rgba(255, 0, 0, 0.829);
        border-right-color: rgba(255, 0, 0, 0.829);
        border-right-style: solid;
        border-top-style: solid;
        padding-top: 20px;
        padding-bottom: 30px;
        /* margin-top:10px;
        margin-left:10px;
        margin-right:10px; */
        font-family: 'Finger Paint', cursive;
        max-width: 22vw;
    }
    img{
    max-height: 100vh;
    max-width: 100vw;
    border-radius: 25%;
}
</style>