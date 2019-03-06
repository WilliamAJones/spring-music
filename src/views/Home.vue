<template>
  <div class="container-fluid">
    <div class=" home row">
        <div class="col-3">
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/tin-man-1-699521.png" alt="">
        </div>
      <div class="col-6 text-left">
        <h6>c:\source\ _start [tinman_player.exe]</h6>
      </div>
      <div class="col-3 text-center">
        <form @submit.prevent="search" class='form-group'>
          <input type="text" placeholder="..." v-model="query" required>
          <button class="btn btn-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
    <results></results>
  </div>
</template>

<script>
  import Results from '@/components/Results.vue'
  export default {
    name: 'home',
    data() {
      return {
        query: ''
      }
    },
    computed: {

    },
    methods: {
      search() {
        this.$store.dispatch('getMusicByArtist', this.query)
      }
    },
    components: {
      Results
    }
  }
</script>

<style> 
body{
  background-color: black;
  
  
}
  .home {
    background-color: rgba(0, 0, 0, 0.596);
   
    letter-spacing: 2px;
    font-family: 'Finger Paint', cursive;

  }

  h6{
    letter-spacing:1rem;
    color:rgba(255, 0, 0, 0.377);
    font-style: italic;
    padding-top:2vh;
    padding-bottom:2vh;
  }
  .acc{
    align-content:center;
  }
  img{
    max-height:10vh;
  }
 
</style>