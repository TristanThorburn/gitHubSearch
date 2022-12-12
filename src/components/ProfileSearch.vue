<template>
    <section class="searchSection">
        <form @keydown.enter.prevent="fetchData">

          <div>
              <label for="userQuery">Who's profile is the target?</label>
              <input 
              type="text" 
              name="userQuery" 
              v-model="user"
              />
          </div>

          <button @click.prevent="fetchData" type="submit">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>

        </form>

    </section>

    <section class="searchResult">
      <div v-if="this.error" class="searchError"> {{ this.error }}</div>

      <ProfileInfo :profile="this.info" v-else/>
    </section>

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
