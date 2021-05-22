<template>
  <div class="advertising" id="top">
    <Slide :width="1400" data-cursor-hover>
        <router-link to="/home">
          <span data-cursor-hover>Home</span>
        </router-link>
        <router-link to="/sales">
        <span data-cursor-hover >sales & streaming</span>
        </router-link>
        <router-link to="/advertising">
        <span data-cursor-hover class="nav-active">advertising & distribution</span>
        </router-link>
        <router-link to="/virtualshows">
        <span data-cursor-hover>virtual shows</span>
        </router-link>
        <router-link to="/travis">
        <span data-cursor-hover>travis x fortnite</span>
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
        <h1>advertising spend</h1>
      </div>
    </header>
    <section class="advertising-info">
      <div class="wrapping-content">
      <article>
        <h2>There has also been reductions in advertising spending that are happening worldwide.</h2>
        <p>A survey by the Interactive Advertising Bureau shows that around one quarter of brands and media buyers have put their advertising on hold for the first half of 2020. 46% of them have simply reduced spending. This result affects ad-supported music channels. Spotify also announced that it missed its first quarter advertising targets due to these changes in ad budgets.</p>
      </article>
              <img src="@/assets/distribution.jpeg" alt="">
      </div>
    </section>
    <section class="distribution">
      <div class="wrapping-content">
      <h1>distribution</h1>
      <article>
      <p>When all of this broke out there was a growing list of artists who delayed their upcoming projects to later that year. All because they were unable to go on tours to promote their new releases. Concerts that were planned in 2020 were being postponed to 2021, which most of have been delayed again and planned for 2022.</p>
      <p>As long as bans have been in place for large gatherings, revenue for live performances is almost zero. Basically cutting the industry’s total revenue in half. The six-month shutdown was estimated to cost over 10$ billion in sponsorships.</p>
      </article>
      </div>
    </section>

    <section class="upnext adnext">
    <kinesis-container>
      <kinesis-element :strength="18"  type="translate" >
      <router-link to="/advertising">
      <h1 data-cursor-hover>up next</h1>
      </router-link>
      </kinesis-element>
    </kinesis-container>
      <h2>virtual shows</h2>
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
      gsap.from('.home h1', {
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
