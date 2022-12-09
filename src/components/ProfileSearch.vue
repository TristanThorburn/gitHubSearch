<template>
    <main>
        <h2>PROFILE SEARCH COMPONENT</h2>
    
        <form @keydown.enter.prevent="fetchData">
            <label for="userQuery">Who are you looking for?</label>
            <input 
              type="text" 
              name="userQuery" 
              v-model="user"
              placeholder="&#127859;"
              />
            <button @click.prevent="fetchData" type="submit"><font-awesome-icon icon="fa-solid fa-magnifying-glass" />Search</button>
        </form>

        <div v-if="this.error"> {{ this.error }}</div>

        <ProfileInfo :profile="this.info" v-else/>
    </main>
</template>

<script>
  import axios from 'axios';
  import ProfileInfo from '../components/ProfileInfo.vue';

  export default {
    name:'HomeView',
    data(){
      return{
        info:null,
        user:null,
        error:null,
      }
    },
    methods: {
      fetchData () {
        axios
        .get(`https://api.github.com/users/${this.user}`)
        .then(response => ( this.info = response.data ), this.error=null)
        .catch(error => ( this.error = error.message ) )
      }
    },
    components:{ ProfileInfo }
  }

</script>
