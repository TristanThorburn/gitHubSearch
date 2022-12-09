<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button>Dark Mode</button>
      </nav>
  </header>

  <RouterView />
</template>

