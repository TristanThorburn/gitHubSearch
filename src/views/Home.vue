<template>

  <section class="routedSection">

    <h1>Creep That GitHub User!</h1>

    <ProfileSearch />
    
  </section>

</template>

<script>
import ProfileSearch from '../components/ProfileSearch.vue';

  export default{
    name:'Home',
    components:{ ProfileSearch }
  }
</script>

