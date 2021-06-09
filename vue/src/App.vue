
<template>
  <div id="app">
    <div class="mobile-splash">
        <div class="wrapping-content">
          <img src="@/assets/loadingscreen.gif" alt="">
          <article>
          <img src="@/assets/browsericon.svg" alt="">
            <h2>Unfortunately, pandeaming is a web-only experience that's meant to be experienced on your desktop/laptop.</h2>
          </article>
        </div>
    </div>
        <div class="loader">
          <div class="wrapping-content">
      <img src="@/assets/loadingscreen.gif" alt="">
            </div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
        <div v-smoothscrollbar="{ listener, options }">
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
        </div>

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
