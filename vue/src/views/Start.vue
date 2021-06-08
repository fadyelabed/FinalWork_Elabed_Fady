<template>

  <div class="start">
    <audio id="bgsong" autoplay loop>
      <source src="@/assets/indexbg.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <header class="videoheader indexheader">
            <img class="logo-top logo-absolute"  src="@/assets/logo1_white.svg" alt="">
        <video autoplay muted loop id="myVideo">
            <source src="@/assets/audioreminderheader.mp4" type="video/mp4">
        </video>
        <div class="wrapping-content">
            <article>
            <img src="@/assets/headphonesicon.svg" alt="">
            <h2>reminder before you start</h2>
            <p>Pandeaming makes use of audio and is an audio-driven experience. To fully experience this, grab some pair of headphones or turn your speakers up and enjoy the ride.</p>
            <router-link to="/index">
            <h3 @click="play" data-cursor-hover>continue</h3>
            </router-link>
            </article>
            <!-- <p class="copyright" data-cursor-hover>a final work project by <a data-cursor-hover href="https://fadyelabed.be/" target="_blank"><span >fady elabed</span></a> / 2020 - 2021</p> -->
        </div>
    </header>
    <cursor-fx>
    </cursor-fx>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { gsap } from 'gsap'
import { useSound } from '@vueuse/sound'
import splashBtnSfx from '../assets/splashsfx.mp3'
export default {
  components: {
  },
  mounted: function () {
    this.startAnimations()
  },
  methods: {
    startAnimations: function () {
      gsap.from('.start article img', {
        duration: 1.5,
        opacity: 0,
        delay: 1.4,
        y: 55,
        ease: 'power3.out'
      })
      gsap.from('.start h2', {
        duration: 0.6,
        opacity: 0,
        delay: 1.9,
        y: 10,
        ease: 'Sine.easeOut'
      })
      gsap.from('.start p', {
        duration: 1.5,
        opacity: 0,
        delay: 2,
        y: 55,
        ease: 'power3.out'
      })
      gsap.from('.start h3', {
        duration: 0.7,
        opacity: 0,
        delay: 3.2,
        ease: 'power1.out'
      })
      gsap.from('.logo-top', {
        duration: 1.8,
        opacity: 0,
        delay: 0.4,
        ease: 'power1.out'
      })
    }
  },
  setup () {
    const { play } = useSound(splashBtnSfx)
    return {
      play
    }
  }
}

</script>
