<template>

  <div class="home intro">
    <Slide :width="1400" data-cursor-hover @click="play({ id:'navitem1'})">
        <router-link to="/home">
          <span data-cursor-hover class="nav-active">Home</span>
        </router-link>
        <router-link to="/sales">
        <span @mouseover="play({ id: 'navitem1' })" @mouseleave="stop" data-cursor-hover>sales & streaming</span>
        </router-link>
        <router-link to="/advertising">
        <span @mouseover="play({ id: 'navitem2' })" @mouseleave="stop" data-cursor-hover>advertising & distribution</span>
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
          <router-link to="/splash">
      <img data-cursor-hover @click="play({ id:'menubacksfx'})" class="logo-top" src="@/assets/logo3_blue.svg" alt="">
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
      <section class="fewfacts" >
        <div class="wrapping-content">
          <article>
            <kinesis-container>
                <kinesis-element :strength="12"  type="depth" >
                <h2 data-aos="fade" data-aos-delay="500" data-aos-duration="1300">a few facts</h2>
                </kinesis-element>
            </kinesis-container>
              <p data-aos="fade-up" data-aos-delay="550" data-aos-duration="1300">it was reported that <b>Spotify</b> streams of the world’s <b>biggest hits</b> were actually <b>down</b> by..</p>
          </article>

          <article class="numberfact">
              <h2 data-aos="fade-left" data-aos-delay="300" data-aos-duration="1300" >11%</h2>
          </article>

        </div>
          <figure data-aos="fade-up" data-aos-delay="300" data-aos-duration="1300">
          </figure>
            <figure class="right-figure" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1300" data-aos-offset="500">
          </figure>
      </section>

      <section class="facts" >
          <article>
            <p data-aos="fade" data-aos-duration="1300"><b>Pollstar</b> estimated the <b>total lost revenue</b> for the live music industry in <b>2020</b> at more than..</p>
            <h2 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1300">30$ billion</h2>
          </article>
      </section>

    <section class="outro-home" data-aos="fade" data-aos-delay="300" data-aos-duration="1300" data-aos-offset="500">
        <div class="wrapping-content" >
            <h3>Which also lead to a wave of cancellations of events, festivals, and tours</h3>
            <h1>And thus began the rise of virtual events</h1>
            <article>
            <p>2020, the year that <b>drastically</b> changed a lot of industries, one of them certainly being the music industry.
            </p>
            <p>An <b>occurrence</b> that some seemed to take a bit too <b>lightly</b>. Knowing that <b>live</b> <b>performances</b> account for 50% of the global music industry’s <b>total revenue</b>, things needed to change, quickly. Since then we’ve seen plenty of really <b>innovative</b> and <b>creative</b> ways of how companies <b>adapted</b> to the circumstances, few of which you’ll see mentioned. But before we get to those, I’ll talk more about the specifics.</p>
            </article>
            <!-- <h4>welcome to pandeaming</h4> -->
        </div>
    </section>

    <section class="upnext" >
    <kinesis-container>
      <kinesis-element :strength="18"  type="translate" >
      <router-link to="/sales#top">
      <h1 @click="play({ id:'glitchsfx'})" data-cursor-hover>up next</h1>
      </router-link>
      </kinesis-element>
    </kinesis-container>
      <h2>sales and streaming</h2>
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
        glitchsfx: [21120, 26170]
      }
    })
    return {
      play,
      stop
    }
  }
}

</script>
