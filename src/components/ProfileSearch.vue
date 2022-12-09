<template>
    <main>
        <h1>Test</h1>
    
        <form @keydown.enter.prevent="fetchData">
            <label for="userQuery">Who are you looking for?</label>
            <p>Searching for {{ user }}</p>
            <input type="text" name="userQuery" v-model="user"/>
        </form>
  
        <ProfileInfo :profile="this.info"/>
    </main>
</template>

<script>
  import axios from 'axios';
  import { ref } from 'vue';
  import ProfileInfo from '../components/ProfileInfo.vue';

  export default {
    name:'HomeView',
    data(){
      return{
        info:null,
        user:ref(null)
      }
    },
    methods: {
      fetchData () {
        axios
        .get(`https://api.github.com/users/${this.user}`)
        .then(response => (this.info = response.data))
        
      }
    },
    components:{
      ProfileInfo
    }

  }

</script>
