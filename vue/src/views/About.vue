<template>
  <div class="aboutpage">
        <div class="wrapping-content">
        <router-link to="/splash">
            <h2 data-cursor-hover @click="play">go back</h2>
        </router-link>
          <h1>[pan-deh-ming]</h1>
        <article>
            <p >Pandeaming, the combination of pandemic and streaming. A project about how the current pandemic impacted the music industry and the ways they adapted/reacted. </p>
            <p>Isolation, probably one of the most important factors about this occurrence, is also reflected in the identity. Not only isolation, but also adaptation, distance and separation. Blending the digital aspect of the streaming side with our current circumstances.</p>
        </article>
        </div>
                                <img src="@/assets/isolation-blue.png" alt="" >

        <!-- <figure>
      <img src="@/assets/isolation-blue.png" alt="">
        </figure> -->
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
      gsap.from('h1', {
        duration: 1.3,
        opacity: 0,
        delay: 3.2,
        y: 35,
        ease: 'power3.out'
      })
      gsap.from('article p:nth-child(1)', {
        duration: 1.6,
        opacity: 0,
        delay: 3.4,
        y: 45,
        ease: 'power3.out'
      })
      gsap.from('article p:nth-child(2)', {
        duration: 1.8,
        opacity: 0,
        delay: 3.5,
        y: 65,
        ease: 'power3.out'
      })
      gsap.from('h2', {
        duration: 1.8,
        opacity: 0,
        delay: 4,
        ease: 'power4.out'
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
