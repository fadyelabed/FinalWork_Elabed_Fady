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
        <p>Most of the songs being from his latest project, but also included some fan-favorites such as '<span>Yeah Right</span>', '<span>Slow Dancing in The Dark</span>' and '<span>Attention</span>'. This whole show was full of surprises. Filled with various skits, talent shows, different challenges in between and during performances. Each of them representing the artist's personality in a comedic manner.</p>
      </article>
      </div>
    </section>
    <section class="joji-shows">
        <video controls>
            <source src="@/assets/sanctuary.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <article class="padding-article float-right">
          <p>Opening the show sitting atop a dunk tank while singing 'Sanctuary', various candidates took their turn to disrupt Joji's singing. Reaching the end, a baseball player got his turn and managed to get the job done. Leaving the singer behind singing in deep water.</p>
        </article>
    </section>
    <section class="joji-shows">
        <img src="@/assets/attention.png" alt="">
        <img src="@/assets/tiktok.png" alt="">
        <article class="padding-article text-center">
<p>Across all performances you'll see him make interesting costume choices that may leave u distracted. Such as his follow-up performance, when he sang 'Attention' while wearing a horse costume.</p>
        </article>
    </section>
     <section class="joji-shows">
        <video class="float-right" controls>
            <source src="@/assets/yourman.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <article class="padding-article" >
        <p>Not only can George sing, but he can also multitask as well, seen in his performance 'Your Man' where he makes an omelette while singing. The stars backdrop combined with the aliens assisting him in his cooking makes for quite an enjoyable performance.</p>
        </article>
    </section>
    <section class="joji-shows bg-orange">
        <article class="padding-article">
          <p>Now I wont be talking about every single performance of the show, but some of the more memorable performance were the ones like 'Pretty Boy' where he was performing in an octagon as the referee while 2 fighters battled their way through victory. Or during 'Run' as the singer went through an obstacle course and ended up on a treadmill literally running while performing his song called 'Run'.</p>
        </article>
        <video class="float-right" autoplay muted loop>
            <source src="@/assets/prettyboy.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <video class="float-left" autoplay muted loop>
            <source src="@/assets/run.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </section>
      <section class="joji-shows bg-dark">
        <div class="wrapping-content">

        <article class="padding-article">
<p>This whole theatrical event just reminded us that this singer- songwriter was once a celebrated internet personality known as Filthy Frank. He pulled off an out of the ordinary enjoyable, unexpected show. Setting the bar high for future digital concerts, and setting himself aside from the generic regular live shows where artists just perform their songs and call it a day.</p>
        </article>
        </div>

    </section>
    <section class="upnext-shows">
      <!-- <h1>up next</h1> -->
      <section>
         <router-link to="/travis" >
        <article class="travis-thumb" >
        <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover>travis scott x fortnite </h2>
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
