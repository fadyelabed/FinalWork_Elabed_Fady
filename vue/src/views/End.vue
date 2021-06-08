<template>
  <div class="conclusion" id="top">
    <router-link to="/">
      <img data-cursor-hover @click="play" class="logo-top"  src="@/assets/logo2_white.svg" alt="">
    </router-link>
    <section class="the-end">
         <kinesis-container>
      <kinesis-element :strength="12"  type="translate" >
            <h1>this was</h1>
        </kinesis-element>
      <kinesis-element :strength="8"  type="depth" >
            <h1>pandeaming</h1>
      </kinesis-element>
    <kinesis-element :strength="3"  type="rotate" >
            <h1>thanks for</h1>
    </kinesis-element>
    <kinesis-element :strength="10"  type="translate" >
            <h1>visiting</h1>
    </kinesis-element>
    </kinesis-container>
          <img class="arrowdown" src="@/assets/arrowdown.svg" alt="">
    </section>
    <audio id="bgsong" autoplay>
      <source src="@/assets/goodday.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <section class="whats-next">
        <div class="wrapping-content">
            <article>
                <h2>what happen's next from now on for the music industry?</h2>
            <p>At the time I'm writing this, the pandemic seems to come slowly to an end. Countries are getting vaccinated, things are getting back to normal so assuming that this whole digital event wave will not return any time soon would be a stretch. Now all though I do think the following months these online events will reduce in numbers, I'm sure that this pandemic has been a good exercise for organisations to go all out in putting out these events. They've probably learned a lot from this and can take notes as to some things they might have had issues with. Streaming and distribution wise, we'll see a rise again, making the numbers back like it used to be and since in-person events are slowly allowed again, artists will likely release new projects and go on tours as well.</p>
            <p>I hope you enjoyed this project of mine. I've spent the last year working on my Final Work, this in collaboration with Erasmushogeschool Brussel. You can find the used resources down below and check my portfolio as well!</p>
        <router-link to="/">
        <p class="index-btn" data-cursor-hover @click="play">return to start</p>
        </router-link>
            </article>

        </div>
    </section>
    <footer>
    <div class="wrapping-content">
    <router-link to="/bronnen">
    <img src="@/assets/linkicon.svg" alt="">
        <p class="src-btn" data-cursor-hover>resources</p>
    </router-link>
    <a href="https://fadyelabed.be/" target="_blank">
        <p class="port-btn" data-cursor-hover>portfolio</p>
                <img class="float-right" src="@/assets/dotsicon2.svg" alt="">
    </a>
    </div>
    </footer>
    <cursor-fx>
    </cursor-fx>
  </div>
</template>

<script>
import { useSound } from '@vueuse/sound'
import backButtonSfx from '../assets/menubacksfx.mp3'
import { gsap } from 'gsap'
// import { Slide } from 'vue-burger-menu'

// import Drawer from 'vue-simple-drawer'

export default {
  name: 'home',
  components: {
    // Slide
  },
  mounted: function () {
    this.startAnimations()
  },
  methods: {
    startAnimations: function () {
      gsap.from('h1', {
        duration: 1.5,
        opacity: 0,
        delay: 3.4,
        y: 55,
        stagger: 0.2,
        ease: 'power3.out'
      })
      gsap.from('.arrowdown', {
        duration: 1.8,
        opacity: 0,
        delay: 4.4,
        y: -55,
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
