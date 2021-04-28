
<template>
  <div id="app">
        <div class="loader">
          <div class="wrapping-content">
      <img src="@/assets/loadingscreen.gif" alt="">
                </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
        <cursor-fx>
    </cursor-fx>
  </div>
</template>
<script>

</script>
<style>

@import 'assets/style.css';
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&display=swap');

@font-face {
  font-family: "Miratrix";
  src: local("Miratrix"),
   url(./fonts/Miratrix-Normal.otf) format("opentype");
}
</style>
