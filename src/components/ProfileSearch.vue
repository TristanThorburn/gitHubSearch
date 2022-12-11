<template>
    <main>
        <form @keydown.enter.prevent="fetchData">
            <label for="userQuery">Who's profile is the target?</label>
            <input 
              type="text" 
              name="userQuery" 
              v-model="user"
              />
            <button @click.prevent="fetchData" type="submit">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
        </form>

        <div v-if="this.error"> {{ this.error }}</div>

        <ProfileInfo :profile="this.info" v-else/>
    </main>
</template>

<script>
  import axios from 'axios';
  import ProfileInfo from '../components/ProfileInfo.vue';

  export default {
    name:'ProfileSearch',
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
        .catch(error => ( this.error = `Are you sure thats the correct name? There's no results...` ) )
      }
    },
    components:{ ProfileInfo }
  }

</script>
