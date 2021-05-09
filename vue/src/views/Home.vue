<template>

  <div class="home">
          <router-link to="/nav">
      <img class="logo-top" src="@/assets/logo1_blue.svg" alt="">
          </router-link>
      <article>
    <kinesis-container>
      <kinesis-element :strength="12"  type="translate" >
            <h1>how the</h1>
        </kinesis-element>
      <kinesis-element :strength="8"  type="depth" >
            <h1>pandemic</h1>
      </kinesis-element>
    <kinesis-element :strength="3"  type="rotate" >
            <h1>affected</h1>
    </kinesis-element>
    <kinesis-element :strength="10"  type="translate" >
            <h1>the music</h1>
    </kinesis-element>
    <kinesis-element :strength="10"  type="depth" >
            <h1>industry</h1>
    </kinesis-element>
    </kinesis-container>
      </article>
      <section>
        <div class="wrapping-content">
          <article>
              <h2>a few facts</h2>
              <p>it was reported that Spotify streams of the world’s biggest hits were actually down by..</p>
          </article>
          <article class="numberfact">
              <h2>11%</h2>
          </article>
        </div>

          <figure>
          </figure>
            <figure>
          </figure>
      </section>

    <cursor-fx>
    </cursor-fx>
  </div>
</template>

<script>
import { useSound } from '@vueuse/sound'
import backButtonSfx from '../assets/menubacksfx.mp3'
import { gsap } from 'gsap'

export default {
  mounted: function () {
    this.startAnimations()
  },
  methods: {
    startAnimations: function () {
      gsap.from('article h1', {
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
