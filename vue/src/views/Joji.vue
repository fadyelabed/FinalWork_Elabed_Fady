<template>
  <div class="joji" id="top">
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
        <span data-cursor-hover >travis x fortnite</span>
        </router-link>
        <router-link to="/joji">
        <span class="nav-active" data-cursor-hover>joji's extravaganza</span>
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
    <audio id="bgsong" autoplay>
      <source src="@/assets/yeahrightbg.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
          <router-link to="/splash">
      <img data-cursor-hover @click="play" class="logo-top logo-absolute"  src="@/assets/logo1_white.svg" alt="">
          </router-link>

    <span class="mute-btn" onclick="muteAudio()"></span>
    <header class="videoheader">
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/jojiheader.mp4" type="video/mp4">
      </video>
      <div class="wrapping-content">
          <article>
          <h2>october 23-24 / 2020</h2>
          <h1>joji presents
              the extravaganza
          </h1>
          </article>
      </div>
    </header>
    <section class="joji-about">
        <div class="wrapping-content">
          <h1>the creative mind behind it</h1>
          <article>
            <p>Joji, 88rising star formerly known as Filthy Frank on YouTube, held his first virtual show ever after releasing his second studio album 'NECTAR'. On Saturday (Oct 24th) George Miller broadcasted this unique event on his website, with 3 different sessions for different timezones.</p>
          </article>
        </div>
        <img src="@/assets/joji.jpeg" alt="">
    </section>
    <section class="joji-intro">
      <div class="wrapping-content">
      <article>
        <p>Most of the songs being from his latest project, but also included some fan-favorites such as <span>'Yeah Right'</span>, <span>'Slow Dancing in The Dark'</span> and <span>'Attention'</span>. This whole show was full of surprises. Filled with various skits, talent shows, different challenges in between and during performances. Each of them representing the artist's personality in a comedic manner.</p>
      </article>
      </div>
    </section>
    <section class="joji-shows">
      <article>
        <video controls>
            <source src="@/assets/sanctuary.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
      </article>
        <article class="padding-article">
          <p>Opening the show sitting atop a dunk tank while singing 'Sanctuary', various candidates took their turn to disrupt Joji's singing. Reaching the end, a baseball player got his turn and managed to get the job done. Leaving the singer behind singing in deep water.</p>
        </article>
    </section>
    <section class="upnext-shows">
      <!-- <h1>up next</h1> -->
      <section>
         <router-link to="/travis" >
        <article class="travis-thumb" >
        <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2  @mouseover="play({ id: 'travis' })" @mouseleave="stop" data-cursor-hover>travis scott x fortnite </h2>
        </kinesis-element>
        </kinesis-container>
        </article>
        </router-link>
        <router-link to="/tomorrowland">
        <article class="tomorrowland-thumb">
         <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover>tomorrowland:
              <br>around the world</h2>
        </kinesis-element>
         </kinesis-container>
        </article>

        </router-link>
        <router-link to="/triller">
        <article class="triller-thumb">
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
