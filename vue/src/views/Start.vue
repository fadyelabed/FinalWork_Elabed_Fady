<template>

  <div class="start">
    <header class="videoheader indexheader">
        <video autoplay muted loop id="myVideo">
            <source src="@/assets/audioreminderheader.mp4" type="video/mp4">
        </video>
        <div class="wrapping-content">
            <article>
            <img src="@/assets/headphonesicon.svg" alt="">
            <h2>reminder before you start</h2>
            <p>Pandeaming makes use of audio and is an audio-driven experience. To fully experience this, grab some pair of headphones or turn your speakers up and enjoy the ride. This is Pandeaming.</p>
            <router-link to="/index">
            <h3 @click="play" data-cursor-hover>continue</h3>
            </router-link>
            </article>
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
      gsap.from('.start img', {
        duration: 1.5,
        opacity: 0,
        delay: 4.4,
        y: 55,
        ease: 'power3.out'
      })
      gsap.from('.start h2', {
        duration: 1.2,
        opacity: 0,
        delay: 5,
        y: 10,
        ease: 'power3.out'
      })
      gsap.from('.start p', {
        duration: 1.5,
        opacity: 0,
        delay: 5.4,
        y: 55,
        ease: 'power3.out'
      })
      gsap.from('.start h3', {
        duration: 1,
        opacity: 0,
        delay: 6.2,
        ease: 'power3.out'
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
