<template>

  <header>
      
    <NavBar />

  </header>

  <main>

    <RouterView />

  </main>

</template>

<script>

  import { RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';

  export default{
    name:'App',
    components:{ NavBar }
  }

</script>