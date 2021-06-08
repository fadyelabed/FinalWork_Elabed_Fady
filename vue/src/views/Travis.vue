<template>
  <div class="travis" id="top">
      <Slide :width="1400" data-cursor-hover @click="play({ id:'navitem1'})" class="white-menu">
        <router-link to="/home">
          <span @mouseover="play({ id: 'navitem1' })" @mouseleave="stop" data-cursor-hover >Home</span>
        </router-link>
        <router-link to="/sales">
        <span @mouseover="play({ id: 'navitem2' })" data-cursor-hover >sales & streaming</span>
        </router-link>
        <router-link to="/advertising">
        <span @mouseover="play({ id: 'navitem3' })" data-cursor-hover >advertising & distribution</span>
        </router-link>
        <router-link to="/virtualshows">
        <span @mouseover="play({ id: 'navitem4' })" @mouseleave="stop" data-cursor-hover>virtual shows</span>
        </router-link>
        <router-link to="/travis">
        <span class="nav-active" data-cursor-hover>travis x fortnite</span>
        </router-link>
        <router-link to="/joji">
        <span @mouseover="play({ id: 'navitem5' })" @mouseleave="stop" data-cursor-hover>joji's extravaganza</span>
        </router-link>
        <router-link to="/tomorrowland">
        <span @mouseover="play({ id: 'navitem6' })" @mouseleave="stop" data-cursor-hover>tomorrowland</span>
        </router-link>
        <router-link to="/triller">
        <span @mouseover="play({ id: 'navitem7' })" @mouseleave="stop" data-cursor-hover>triller fight club</span>
        </router-link>
        <router-link to="/">
        <p @mouseover="play({ id: 'navindex' })" @mouseleave="stop" data-cursor-hover>return to index / startscreen</p>
        </router-link>
    </Slide>
          <router-link to="/splash">
          <img data-cursor-hover @click="play({ id:'menubacksfx'})" class="logo-top logo-absolute"  src="@/assets/logo1_white.svg" alt="">
          </router-link>

    <span class="mute-btn" onclick="muteAudio()"></span>
    <header class="videoheader">
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/travisheader.mp4" type="video/mp4">
      </video>
      <div class="wrapping-content">
          <article>
          <h2>April 23 - 25 / 2020</h2>
          <h1>Travis scott’s </h1>
          <h1>Astronomical</h1>
          <h1>breaks Records</h1>
          </article>
      </div>
    </header>
    <section class="astronomical">

    <kinesis-container>
        <kinesis-element :strength="50" type="translate">
        <img data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="500" class="fortlogo" src="@/assets/travislogo.png" alt="">
        </kinesis-element>
    <kinesis-element :strength="38"  type="translate"  >
        <img  class="fort1" src="@/assets/fortnite1.png" alt="">
    </kinesis-element>
    <kinesis-element :strength="25"  type="translate" >
        <img class="fort2" src="@/assets/fortnite2.png" alt="">
    </kinesis-element>
    <kinesis-element :strength="10"  type="translate" >
        <img class="fort3" src="@/assets/fortnite3.jpeg" alt="">
    </kinesis-element>
    </kinesis-container>

    </section>
    <section class="astro-info">
              <div class="wrapping-content">
        <article data-aos="fade" data-aos-once="true" data-aos-delay="300" data-aos-duration="1200" data-aos-offset="300">
            <p>Fortnite is known to have made successful ambitious events in the past. Well this time around they decided to partner up with viral hip-hop artist Travis Scott and create the most exciting and interactive live show event yet!</p>
            <p>Known for his songs goosebumps, butterfly effect, sicko mode he set the stage for the first time in a game and managed to pull off one of the most innovative/creative live virtual shows to date.</p>
        </article>
              </div>
    </section>
    <section class="fortnite-video">
        <video data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="300" controls>
            <source src="@/assets/fortnite.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="wrapping-content">
        <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="300">Setting the bar high, like really</h1>
        <article data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="300">
            <p>The event itself lasted around 15 minutes, with multiple showings going around at different times for different regions. Players were gathered around the stage before things popped off. Check the video above to watch some scenes of the event. Players were assigned some emotes/dances they could use throughout the performance. As giant sized Travis came smashing down on the stage, it changed the whole island’s appearance. The artist sang his most well known songs and between each song transition, players were teleported, dragged and flown around various different atmospheres that were truly mesmerising. Not to forget this event was free for anyone to join, since the game itself is free, which made this show so accesible.</p>
        </article>
        </div>
    </section>
        <audio id="bgsong" autoplay>
      <source src="@/assets/goosebumps2.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <section class="fort-item">
        <div class="wrapping-content">
            <img data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="300" src="@/assets/fortitem1.jpeg" alt="">
            <img data-aos="fade" data-aos-once="true" data-aos-delay="700" data-aos-duration="1000" data-aos-offset="300" src="@/assets/fortitem2.jpeg" alt="">
            <article data-aos="fade-up" data-aos-once="true" data-aos-delay="700" data-aos-duration="1000" data-aos-offset="300">
                <p>Before the event, they released cosmetic add-ons for players to buy such as the Travis skin, his outfits, emotes and more.</p>
            </article>
            <h2 data-aos="fade-up" data-aos-once="true" data-aos-delay="900" data-aos-duration="1000" data-aos-offset="300">This event really set the bar for what’s possible in the future for these types of shows. Fortnite set an all-time record for most concurrent players in a video game ever. Going over..</h2>
            <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="1300" data-aos-duration="1000" data-aos-offset="500">12.3 million concurrents!</h1>
        </div>
    </section>
    <section class="upnext-shows">
      <!-- <h1>up next</h1> -->
      <section>
        <router-link to="/joji">
        <article data-aos="fade-up" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="300" class="joji-thumb">
         <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover>joji's
               <br> extravaganza</h2>
        </kinesis-element>
         </kinesis-container>
        </article>
        </router-link>

        <router-link to="/tomorrowland">
        <article data-aos="fade-up" data-aos-once="true" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="300" class="tomorrowland-thumb">
         <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover>tomorrowland:
              <br>around the world</h2>
        </kinesis-element>
         </kinesis-container>
        </article>

        </router-link>
        <router-link to="/triller">
        <article data-aos="fade-up" data-aos-once="true" data-aos-delay="1300" data-aos-duration="1000" data-aos-offset="300" class="triller-thumb">
         <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover> triller fight club</h2>
        </kinesis-element>
         </kinesis-container>
        </article>
        </router-link>
      </section>
    </section>
    <cursor-fx>
    </cursor-fx>
  </div>
</template>

<script>
import { useSound } from '@vueuse/sound'
import home from '../assets/home.mp3'
import { gsap } from 'gsap'
import { Slide } from 'vue-burger-menu'

// import Drawer from 'vue-simple-drawer'

export default {
  name: 'home',
  components: {
    Slide
  },
  mounted: function () {
    this.startAnimations()
  },
  methods: {
    startAnimations: function () {
      gsap.from('.videoheader h1', {
        duration: 1.5,
        opacity: 0,
        delay: 3.4,
        y: 55,
        stagger: 0.2,
        ease: 'power3.out'
      })
      gsap.from('.videoheader h2', {
        duration: 1,
        opacity: 0,
        delay: 4.4,
        ease: 'power3.out'
      })
    }
  },
  setup () {
    // const { play, stop } = useSound(backButtonSfx)
    const { play, stop } = useSound(home, {
      sprite: {
        burgernav: [0, 2370],
        navitem1: [2350, 2350],
        navitem2: [3500, 3700],
        navitem3: [5080, 6090],
        navitem4: [6090, 7080],
        navitem5: [7080, 8020],
        navitem6: [8020, 8150],
        navitem7: [8150, 9000],
        navindex: [9000, 10160],
        menubacksfx: [10170, 10200],
        splashsfx: [12090, 21120],
        advertising: [21120, 26170]
      }
    })
    return {
      play,
      stop
    }
  }
}
</script>
