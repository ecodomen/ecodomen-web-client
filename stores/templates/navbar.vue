<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color: #FFFFFF !important;">
      <a class="navbar-brand" href="/list"></a>
      <div class="projbuttons">
        <div class="projbutton ml-auto">
          <a href="/project">Проект</a>
        </div>
        <div class="projbutton ml-auto">
          <a href="/about-us">Команда</a>
        </div>
        <div class="navbar-toggler" id="burger-menu" @click="toggleMenu">
          <img src="" alt="" width="40">
        </div>
      </div>
      <div class="navbar-collapse" :style="{ display: isMenuOpen ? 'block' : 'none' }">
        <ul class="navbar-nav">
          <li class="nav-item"><a href="/about-us">КОМАНДА</a></li>
          <li class="nav-item"><a href="/project">ПРОЕКТ</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
  @import "@/assets/css/main.css";
  
  /* Add any additional styles here */
  </style>
  