<template>
  <div class="splash">
    <img class="logo-top logo-absolute"  src="@/assets/logo2_white.svg" alt="">
    <audio id="bgsong" autoplay loop>
      <source src="@/assets/transpsoul.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <video autoplay muted loop id="myVideo">
        <source src="@/assets/splashconcert.mp4" type="video/mp4">
      </video>
    <kinesis-container>
      <kinesis-element :strength="12"  type="depth" >
        <div class="wrapping-content">
          <h1>welcome</h1>
          <router-link to="/home">
          <h2 data-cursor-hover @click="play">begin</h2>
          </router-link>
          <router-link to="/about">
            <h2 data-cursor-hover @click="play">about</h2>
          </router-link>
        </div>
    </kinesis-element>
  </kinesis-container>
          <p data-cursor-hover>a final work project by <a data-cursor-hover href="https://fadyelabed.be/" target="_blank"><span >fady elabed</span></a> / 2020 - 2021</p>

    <cursor-fx>
    </cursor-fx>
  </div>
</template>

<script>
import { useSound } from '@vueuse/sound'
import buttonSfx from '../assets/menusfxdelayed.mp3'
import { gsap } from 'gsap'

export default {
  components: {
  },
  mounted: function () {
    this.startAnimations()
  },
  methods: {
    startAnimations: function () {
      gsap.from('.splash h1', {
        duration: 1.5,
        opacity: 0,
        delay: 3.4,
        y: 55,
        ease: 'power3.out'
      })
      gsap.from('.splash h2', {
        duration: 0.6,
        opacity: 0,
        delay: 3.8,
        y: 10,
        stagger: 0.2,
        ease: 'power3.out'
      })
      gsap.from('.splash p', {
        duration: 1.5,
        opacity: 0,
        delay: 5.5,
        ease: 'power1.out'
      })
      gsap.from('.splash img', {
        duration: 0.7,
        opacity: 0,
        delay: 5.7,
        ease: 'power1.out'
      })
    }
  },
  setup () {
    const { play } = useSound(buttonSfx)
    return {
      play
    }
  }
}
</script>
