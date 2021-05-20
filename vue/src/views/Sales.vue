<template>
  <div class="sales" id="top">
    <Slide :width="1400" data-cursor-hover>
        <router-link to="/home">
          <span data-cursor-hover >Home</span>
        </router-link>
        <router-link to="/sales">
        <span data-cursor-hover class="nav-active">sales & streaming</span>
        </router-link>
        <router-link to="/advertising">
        <span data-cursor-hover>advertising & distribution</span>
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
      <img data-cursor-hover @click="play" class="logo-top"  src="@/assets/logo1_blue.svg" alt="">
          </router-link>
    <header>
      <div class="wrapping-content">
        <h1>income streams</h1>
        <h2>Before we talk about how it’s impacted, I wanted to differentiate the two major income streams that make up for the whole industry’s revenue.</h2>
        <article>
          <p>First one being live music. 50% of the total revenue come from sales of tickets for live performances and what not.</p>
          <p>The second one being recorded music. That includes revenue from streaming, digital downloads, physical sales and licensing revenues for movies, games, TV and advertising. Recorded music as of today is close to what the industry was before the piracy peak. Just goes to show the growth of streaming services by music labels and consumers. Half of recorded music revenue comes from streaming.</p>
        </article>
                <img class="img-absolute" src="@/assets/streaming.jpeg" alt="">

      </div>
    </header>
    <section class="streaming">
      <div class="wrapping-content">
        <h1>sales & streaming</h1>
        <article>
          <p>During the start of this pandemic, physical sales went down by about one-third. Quick reminder that physical sales represent one quarter of recorded music revenue. Meanwhile digital sales fell around 11%.</p>
          <p>It has also been noticed by evidence that the way people listen to music slightly changed in light of coronavirus. Tencent Music Entertainment (TME, China) reported have reported these changes in listening behaviour, with more people using home applications on TV’s and smart devices.</p>
        </article>
        <article>
        <img src="@/assets/records2.jpeg" alt="">
        </article>
      </div>
    </section>
    <section class="listening">
        <div class="wrapping-content">
          <article>
            <p>In the first quarter of 2020, there was a noticeable increase in online music subscription revenue by 70%. A year-over-year of 50.4%, said Tsai Chun Pan, Group Vice President over at TME.</p>
            <p>Spotify has also noted seeing change in their consumers’ routine. “Daily habits are now reflected on weekend consumption, as well as relaxing genres rising in popularity”</p>

          </article>
        </div>
    <img src="@/assets/listening_blue.svg" alt="">
    </section>

    <section class="upnext salesnext">
    <kinesis-container>
      <kinesis-element :strength="18"  type="translate" >
      <router-link to="/sales">
      <h1 data-cursor-hover>up next</h1>
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
