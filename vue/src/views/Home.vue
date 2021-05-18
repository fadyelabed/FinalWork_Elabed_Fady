<template>

  <div class="home intro">
    <Slide :width="1400" data-cursor-hover>
        <router-link to="/">
          <span data-cursor-hover class="nav-active">Home</span>
        </router-link>
        <router-link to="">
        <span data-cursor-hover>sales & streaming</span>
        </router-link>
        <router-link to="/">
        <span data-cursor-hover>advertising & distribution</span>
        </router-link>
        <router-link to="/">
        <span data-cursor-hover>virtual shows</span>
        </router-link>
        <router-link to="/">
        <span data-cursor-hover>travis x fortnite</span>
        </router-link>
        <router-link to="/">
        <span data-cursor-hover>joji's extravaganza</span>
        </router-link>
        <router-link to="/">
        <span data-cursor-hover>tomorrowland</span>
        </router-link>
        <router-link to="/">
        <span data-cursor-hover>triller fight club</span>
        </router-link>
    </Slide>
          <router-link to="/splash">
      <img data-cursor-hover @click="play" class="logo-top" src="@/assets/logo1_blue.svg" alt="">
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

      <section class="fewfacts" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1300">
        <div class="wrapping-content">
          <article>
            <kinesis-container>
                <kinesis-element :strength="12"  type="depth" >
                <h2>a few facts</h2>
                </kinesis-element>
            </kinesis-container>
              <p>it was reported that Spotify streams of the world’s biggest hits were actually down by..</p>
          </article>

          <article class="numberfact">
              <h2>11%</h2>
          </article>

        </div>
          <figure>
          </figure>
            <figure class="right-figure">
          </figure>
      </section>

      <section class="facts" >
          <article>
            <p>Pollstar estimated the total lost revenue for the live music industry in 2020 at more than..</p>
            <h2>30$ billion</h2>
          </article>
      </section>

    <section class="outro-home">
        <div class="wrapping-content">
            <h3>Which also lead to a wave of cancellations of events, festivals, and tours</h3>
            <h1>And thus began the rise of virtual events</h1>
            <article>
            <p>2020, the year that drastically changed a lot of industries, one of them certainly being the music industry.
            </p>
            <p>An occurrence that some seemed to take a bit too lightly. Knowing that live performances account for 50% of the global music industry’s total revenue, things needed to change, quickly. Since then we’ve seen plenty of really innovative and creative ways of how companies adapted to the circumstances, few of which you’ll see mentioned. But before we get to those, I’ll talk more about the specifics.</p>
            </article>
            <!-- <h4>welcome to pandeaming</h4> -->
        </div>
    </section>

    <section class="upnext">
    <kinesis-container>
      <kinesis-element :strength="18"  type="translate" >
      <h1>up next</h1>
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
      gsap.from('.intro h1', {
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
