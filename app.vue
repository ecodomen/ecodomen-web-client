<template>
  <div id="app">
    <Navbar />
    <main>
      <div>
        <NuxtLayout>  
          <NuxtPage/>
        </NuxtLayout>
  </div>
    </main>
  </div>
</template>

<script>
import Navbar from './stores/templates/navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/icons/font/bootstrap-icons.css";
@import "@/assets/css/main.css";
</style>