<template>
  <div class="sales" id="top">
       <Slide :width="1400" data-cursor-hover @click="play({ id:'navitem1'})">
        <router-link to="/home">
          <span @mouseover="play({ id: 'navitem1' })" @mouseleave="stop" data-cursor-hover >Home</span>
        </router-link>
        <router-link to="/sales">
        <span data-cursor-hover class="nav-active">sales & streaming</span>
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
      <img data-cursor-hover @click="play({ id:'menubacksfx'})" class="logo-top"  src="@/assets/logo1_blue.svg" alt="">
          </router-link>
    <header>
      <div class="wrapping-content">
        <h1>income streams</h1>
        <h2>Before we talk about how it’s impacted, I wanted to differentiate the two major income streams that make up for the whole industry’s revenue.</h2>
        <article>
          <p>First one being live music. 50% of the total revenue come from sales of tickets for live performances and what not.</p>
          <p>The second one being recorded music. That includes revenue from streaming, digital downloads, physical sales and licensing revenues for movies, games, TV and advertising. Recorded music as of today is close to what the industry was before the piracy peak. Just goes to show the growth of streaming services by music labels and consumers. Half of recorded music revenue comes from streaming.</p>
        </article>
                <img class="img-absolute" src="@/assets/streaming.jpeg" alt="" data-aos="fade-up" data-aos-duration="1300" data-aos-offset="400">

      </div>
    </header>
    <section class="streaming">
      <div class="wrapping-content">
        <h1>sales & streaming</h1>
        <article data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="800" data-aos-offset="300">
          <p>During the start of this pandemic, physical sales went down by about one-third. Quick reminder that physical sales represent one quarter of recorded music revenue. Meanwhile digital sales fell around 11%.</p>
          <p>It has also been noticed by evidence that the way people listen to music slightly changed in light of coronavirus. Tencent Music Entertainment (TME, China) reported have reported these changes in listening behaviour, with more people using home applications on TV’s and smart devices.</p>
        </article>
        <article>
        <img src="@/assets/records2.jpeg" alt="" data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="900" >
        </article>
      </div>
    </section>
    <section class="listening">
        <div class="wrapping-content">
          <article data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="800" data-aos-offset="300">
            <p>In the first quarter of 2020, there was a noticeable increase in online music subscription revenue by 70%. A year-over-year of 50.4%, said Tsai Chun Pan, Group Vice President over at TME.</p>
            <p>Spotify has also noted seeing change in their consumers’ routine. “Daily habits are now reflected on weekend consumption, as well as relaxing genres rising in popularity”</p>

          </article>
        </div>
    <img data-aos="fade" data-aos-duration="1250" data-aos-offset="300" data-aos-delay="300" src="@/assets/listening_blue.svg" alt="" >
    </section>

    <section class="upnext salesnext">
    <kinesis-container>
      <kinesis-element :strength="18"  type="translate" >
      <router-link to="/advertising">
      <h1 @click="play({ id:'advertising'})" data-cursor-hover>up next</h1>
      </router-link>
      </kinesis-element>
    </kinesis-container>
      <h2>advertising and distribution</h2>
    </section>
    <cursor-fx>
    </cursor-fx>
  </div>
</template>

<script>
import { useSound } from '@vueuse/sound'
import sales from '../assets/sales.mp3'
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
      gsap.from('.sales h1', {
        duration: 1.5,
        opacity: 0,
        delay: 3.4,
        y: 55,
        ease: 'power3.out'
      })
      gsap.from('.sales h2', {
        duration: 0.4,
        opacity: 0,
        delay: 3.4,
        y: 35,
        ease: 'power2.out'
      })
      gsap.from('.sales article p', {
        duration: 1.6,
        opacity: 0,
        delay: 4.6,
        y: 35,
        stagger: 0.4,
        ease: 'power3.out'
      })
    }
  },
  setup () {
    // const { play, stop } = useSound(backButtonSfx)
    const { play, stop } = useSound(sales, {
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
