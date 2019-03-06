<template>
    
        <div class="row details d-flex" v-if="song.trackId">
            <div class="col-3 d-flex" >
                <img :src="song.img" alt="">
            </div>
                <div class="col-5 text-align-justify">
                    <ul>
                        <h1 class="">{{song.artistName}}</h1>
                        <h3 class="">{{song.trackName}}</h3>
                        <li>Song Title: {{song.trackName}}</li>
                        <li>Collection: {{song.collectionName}}</li>
                        <li>Collection Price: ${{song.collectionPrice}}</li>
                        <li>Track Price: ${{song.trackPrice}}</li>
                    </ul>
                </div>
                <div class="col-4">
                        <audio id="mediatag" controls> <source :src="song.previewUrl"></audio>
                        
                </div>
        </div>
    
</template>

<script>
    export default {
        name: 'Details',
        // props: ['song'],
        data() {
            return {

            }
        },
        computed: {
            song(){
                let song=this.$store.state.activeSong
                if(song.trackId){
                let elem= document.getElementById('mediatag')
                if(elem){
                    elem.src=song.previewUrl
                    elem.load()
                    elem.play()
                }
                song.img= song.artworkUrl100.replace(/100x100/g, "300x300")
                return song
            }
            return
            }
        },
        methods: {}
    }

</script>

<style>

    .details{
        background-color:transparent;
        display:flex;
        align-items: center!important;
        text-shadow: -1px -1px gray;
        color:rgba(255, 0, 0, 0.205);
        border-top-color: rgba(255, 0, 0, 0.829);
        border-right-color: rgba(255, 0, 0, 0.829);
        border-right-style:solid;
        border-top-style:solid;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-top:10px;
        font-family: 'Finger Paint', cursive;
    
    }
    audio
{
-webkit-transition:all 0.5s linear;
-moz-transition:all 0.5s linear;
-o-transition:all 0.5s linear;
transition:all 0.5s linear;
/* -moz-box-shadow: 2px 2px 4px 0px #006773;
-webkit-box-shadow:  2px 2px 4px 0px #006773;
box-shadow: 2px 2px 4px 0px #006773; */
-moz-border-radius:7px 7px 7px 7px ;
-webkit-border-radius:7px 7px 7px 7px ;
border-radius:7px 7px 7px 7px ;
/* max-width:20vw; */
}

audio:hover, audio:focus, audio:active
{
-webkit-box-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);
-moz-box-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);
box-shadow: 15px 15px 20px rgba(0,0, 0, 0.4);
-webkit-transform: scale(1.25);
-moz-transform: scale(1.25);
transform: scale(1.25);
}
img{
    max-height: 100vh;
    max-width: 100vw;
}
h1{
    letter-spacing:2rem;
    color:rgba(255, 0, 0, 0.884);
    font-style: italic;
}
h3{
    letter-spacing:1rem;
    color:rgba(255, 0, 0, 0.068);
    font-style: italic;
}

</style>