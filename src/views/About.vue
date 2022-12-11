<template>
  <div class="about">
    <h1>APP CREATOR</h1>
    <ProfileInfo :profile="this.info"/>
  </div>
</template>

<script>
  import axios from 'axios';
  import ProfileInfo from '../components/ProfileInfo.vue';

    export default {
      name:'About',
      data(){
        return{
          info:null,
          user:'TristanThorburn',
          error:null,
        }
      },
      mounted(){
        axios
        .get(`https://api.github.com/users/${this.user}`)
        .then(response => ( this.info = response.data ), this.error=null)
        .catch(error => ( this.error = error.message ) )
      },
      components: { ProfileInfo }
    }
</script>
