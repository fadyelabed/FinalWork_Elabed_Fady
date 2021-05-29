<template>
  <div class="travis" id="top">
    <Slide :width="1400" data-cursor-hover class="white-menu">
        <router-link to="/home">
          <span data-cursor-hover>Home</span>
        </router-link>
        <router-link to="/sales">
        <span data-cursor-hover >sales & streaming</span>
        </router-link>
        <router-link to="/advertising">
        <span data-cursor-hover >advertising & distribution</span>
        </router-link>
        <router-link to="/virtualshows">
        <span data-cursor-hover>virtual shows</span>
        </router-link>
        <router-link to="/travis">
        <span data-cursor-hover class="nav-active">travis x fortnite</span>
        </router-link>
        <router-link to="/joji">
        <span data-cursor-hover>joji's extravaganza</span>
        </router-link>
        <router-link to="/tomorrowland">
        <span data-cursor-hover>tomorrowland</span>
        </router-link>
        <router-link to="/triller">
        <span data-cursor-hover>triller fight club</span>
        </router-link>
        <router-link to="/">
        <p data-cursor-hover>return to index / startscreen</p>
        </router-link>
    </Slide>
          <router-link to="/splash">
      <img data-cursor-hover @click="play" class="logo-top logo-absolute"  src="@/assets/logo1_white.svg" alt="">
          </router-link>
    <header>
      <div class="wrapping-content">
          <article>
          <h2>April 23 - 25 / 2020</h2>
          <h1>Travis scott’s Astronomical breaks Records</h1>
          </article>
      </div>
    </header>
    <section class="astronomical">

    <kinesis-container>
        <kinesis-element :strength="50" type="translate">
        <img class="fortlogo" src="@/assets/travislogo.png" alt="">
        </kinesis-element>
    <kinesis-element :strength="38"  type="translate" >
        <img class="fort1" src="@/assets/fortnite1.png" alt="">
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
        <article>
            <p>Fortnite is known to have made successful ambitious events in the past. Well this time around they decided to partner up with viral hip-hop artist Travis Scott and create the most exciting and interactive live show event yet!</p>
            <p>Known for his songs goosebumps, butterfly effect, sicko mode he set the stage for the first time in a game and managed to pull off one of the most innovative/creative live virtual shows to date.</p>
        </article>
              </div>
    </section>
    <cursor-fx>
    </cursor-fx>
  </div>
</template>

<script>
import { useSound } from '@vueuse/sound'
import backButtonSfx from '../assets/menubacksfx.mp3'
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
      gsap.from('.advertising h1', {
        duration: 1.5,
        opacity: 0,
        delay: 3.4,
        y: 55,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }
  },
  setup () {
    const { play } = useSound(backButtonSfx)
    return {
      play
    }
  }
}

</script>
