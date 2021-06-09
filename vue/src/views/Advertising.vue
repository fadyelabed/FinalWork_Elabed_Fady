<template>
  <div class="advertising" id="top">
      <Slide :width="1400" data-cursor-hover @click="play({ id:'navitem1'})" class="white-menu">
        <router-link to="/home">
          <span @mouseover="play({ id: 'navitem1' })" @mouseleave="stop" data-cursor-hover >Home</span>
        </router-link>
        <router-link to="/sales">
        <span @mouseover="play({ id: 'navitem2' })" data-cursor-hover >sales & streaming</span>
        </router-link>
        <router-link to="/advertising">
        <span data-cursor-hover class="nav-active">advertising & distribution</span>
        </router-link>
        <router-link to="/virtualshows">
        <span @mouseover="play({ id: 'navitem3' })" @mouseleave="stop" data-cursor-hover>virtual shows</span>
        </router-link>
        <router-link to="/travis">
        <span @mouseover="play({ id: 'navitem4' })" @mouseleave="stop" data-cursor-hover>travis x fortnite</span>
        </router-link>
        <router-link to="/joji">
        <span @mouseover="play({ id: 'navitem5' })" @mouseleave="stop" data-cursor-hover>joji's extravaganza</span>
        </router-link>
        <router-link to="/tomorrowland">
        <span @mouseover="play({ id: 'navitem6' })" @mouseleave="stop" data-cursor-hover>tomorrowland</span>
        </router-link>
        <router-link to="/triller">
        <span @mouseover="play({ id: 'navitem7' })" @mouseleave="stop" data-cursor-hover>triller fight club</span>
        </router-link>
        <router-link to="/">
        <p @mouseover="play({ id: 'navindex' })" @mouseleave="stop" data-cursor-hover>return to index / startscreen</p>
        </router-link>
    </Slide>

    <header>
      <div class="wrapping-content">
            <router-link to="/splash">
      <img  data-cursor-hover @click="play"  class="logo-top logo-absolute"  src="@/assets/logo2_white.svg" alt="">
    </router-link>
         <kinesis-container>
      <kinesis-element :strength="10"  type="depth" >
        <h1>advertising spend</h1>
      </kinesis-element>
         </kinesis-container>
      </div>
    </header>
    <section class="advertising-info">
      <div class="wrapping-content">
      <article>
        <h2 data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="800" data-aos-offset="300">There has also been <b>reductions</b> in <b>advertising spending</b> that are happening <b>worldwide</b>.</h2>
        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="800" data-aos-offset="300">A <b>survey</b> by the <b>Interactive Advertising Bureau</b> shows that around <b>one quarter of brands</b> and <b>media buyers</b> have put their advertising <b>on hold</b> for the first half of 2020. <b>46%</b> of them have simply <b>reduced spending</b>. This result <b>affects ad-supported music channels</b>. Spotify also announced that it <b>missed</b> its first quarter <b>advertising targets</b> due to these <b>changes in ad budgets</b>.</p>
      </article>
      <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" data-aos-offset="300" src="@/assets/distribution.jpeg" alt="">
      </div>
    </section>
    <section class="distribution">
      <div class="wrapping-content">
      <h1>distribution</h1>
      <article>
      <p>When all of this broke out there was a <b>growing list of artists</b> who <b>delayed</b> their upcoming <b>projects</b> to later that year. All because they were <b>unable</b> to go on <b>tours</b> to promote their new releases. Concerts that were planned in 2020 were being <b>postponed to 2021</b>, which <b>most</b> of have been <b>delayed again</b> and planned for <b>2022</b>.</p>
      <p>As long as bans have been in place for large gatherings, <b>revenue</b> for live performances is <b>almost zero</b>. Basically <b>cutting</b> the <b>industry’s total revenue in half</b>. The six-month shutdown was estimated to cost <b>over 10$ billion</b> in sponsorships.</p>
      </article>
      </div>
    </section>

    <section class="upnext adnext">
    <kinesis-container>
      <kinesis-element :strength="18"  type="translate" >
      <router-link to="/virtualshows">
      <h1 @click="play({ id:'splashsfx'})" data-cursor-hover>up next</h1>
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
import home from '../assets/home.mp3'
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
    // const { play, stop } = useSound(backButtonSfx)
    const { play, stop } = useSound(home, {
      sprite: {
        burgernav: [0, 2370],
        navitem1: [2350, 2350],
        navitem2: [3500, 3700],
        navitem3: [5080, 6090],
        navitem4: [6090, 7080],
        navitem5: [7080, 8020],
        navitem6: [8020, 8150],
        navitem7: [8150, 9000],
        navindex: [9000, 10160],
        menubacksfx: [10170, 10200],
        splashsfx: [12090, 21120],
        advertising: [21120, 26170]
      }
    })
    return {
      play,
      stop
    }
  }
}

</script>
