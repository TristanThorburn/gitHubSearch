<script setup>
  import axios from 'axios';
  import { ref } from 'vue';

  const user = ref('');

  const fetchData = () => {
    console.log(user.value)
    axios
      .get(`https://api.github.com/users/${user.value}`)
      .then(response => console.log(response))
  }

</script>

<template>
  <main>
    <h1>Test</h1>
  
    <input type="text" v-model="user"/>
    <button type="submit" @click="fetchData">Submit</button>
    <p>the user searched is {{ user }}</p>
  </main>
</template>
