<template>
  <div class="triller" id="top">
<Slide :width="1400" data-cursor-hover class="white-menu">
        <router-link to="/home">
          <span @mouseover="play({ id: 'navitem1' })" @mouseleave="stop" data-cursor-hover >Home</span>
        </router-link>
        <router-link to="/sales">
        <span @mouseover="play({ id: 'navitem2' })" data-cursor-hover >sales & streaming</span>
        </router-link>
        <router-link to="/advertising">
        <span @mouseover="play({ id: 'navitem3' })" data-cursor-hover >advertising & distribution</span>
        </router-link>
        <router-link to="/virtualshows">
        <span @mouseover="play({ id: 'navitem4' })" @mouseleave="stop" data-cursor-hover>virtual shows</span>
        </router-link>
        <router-link to="/travis">
        <span @mouseover="play({ id: 'navitem5' })" data-cursor-hover>travis x fortnite</span>
        </router-link>
        <router-link to="/joji">
        <span @mouseover="play({ id: 'navitem5' })" @mouseleave="stop" data-cursor-hover>joji's extravaganza</span>
        </router-link>
        <router-link to="/tomorrowland">
        <span  @mouseover="play({ id: 'navitem6' })" @mouseleave="stop" data-cursor-hover>tomorrowland</span>
        </router-link>
        <router-link to="/triller">
        <span class="nav-active" data-cursor-hover>triller fight club</span>
        </router-link>
        <router-link to="/">
        <p @mouseover="play({ id: 'navindex' })" @mouseleave="stop" data-cursor-hover>return to index / startscreen</p>
        </router-link>
    </Slide>
    <audio id="bgsong" autoplay>
      <source src="@/assets/whatsnext.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
          <router-link to="/splash">
          <img data-cursor-hover @click="play({ id:'menubacksfx'})" class="logo-top logo-absolute"  src="@/assets/logo1_white.svg" alt="">
          </router-link>
    <span class="mute-btn" onclick="muteAudio()"></span>
    <header class="videoheader">
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/trillerheader.mp4" type="video/mp4">
      </video>
      <div class="wrapping-content">
          <article>
          <h2>november 28 - 2020 / april 17th - 2021</h2>
          <h1>triller fight </h1>
          <h1>club presents </h1>
          <h1>paul vs askren</h1>
          </article>
      </div>
    </header>
    <section class="tysonjones">
        <div class="wrapping-content">
            <h1 data-aos="fade-left" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000">merging the </h1>
            <h1 data-aos="fade-left" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000">boxing and </h1>
            <h1 data-aos="fade-left" data-aos-once="true" data-aos-delay="900" data-aos-duration="1000">entertainment</h1>
            <h1 data-aos="fade-left" data-aos-once="true" data-aos-delay="950" data-aos-duration="1000">world together</h1>
            <article>
                <p data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="600">On April 17th, <b>Triller hosted</b> their <b>second boxing event</b>. The first one being the <b>Tyson vs Jones</b> event that was organized on <b>November 28th 2020</b>.</p>
                <p data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="600">You're probably wondering why I'm talking about boxing all of a sudden, well <b>Triller</b> is the first platform to establish an event in this <b>sort of manner</b>. Basically they had the idea to host a boxing event and have <b>multiple artists</b> present to <b>perform</b> in between fights. So you would have <b>the enjoyment</b> of being able to watch these <b>fights</b> and see these <b>live artists</b> perform, which creates for a very <b>cool dynamic</b>. The Tyson vs Jones event had appearances from <b>French Montana</b>, <b>Wiz Khalifa</b>, <b>Snoop Dogg</b>, <b>YG</b>, <b>Ne-yo</b> and <b>Saint JHN</b>.</p>
            </article>
            <img data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="600" class="trillerlogo" src="@/assets/trillerlogo.jpeg" alt="">
        </div>
    <img data-aos="fade-right" data-aos-once="true" data-aos-delay="500" data-aos-duration="1300" data-aos-offset="600" src="@/assets/tysonjones.webp" alt="">
    </section>
    <section class="jakepaul">
        <div class="wrapping-content">
            <article data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="600">
                <p>The main event <b>Mike Tyson</b> against <b>Roy Jones Jr.</b> was an <b>exhibition fight</b> which means that it wouldn't affect their professional records. The fight was <b>surprisingly entertaining</b> considering the 2 are <b>over the age of 50</b>. This matchup resulted in a <b>draw</b>. Not to mention the <b>recent hype</b> of <b>influencer boxing</b> in which YouTuber <b>Jake Paul</b> was both involved in. Jake Paul was up against <b>former NBA-player Nate Robinson</b>. Jake Paul unsurprisingly <b>knocked out</b> Nate in the <b>2nd round</b>, which resulted in him <b>stealing the show</b> and <b>going viral</b> for his impressive performance. </p>
            </article>
        </div>
         <img data-aos="fade-right" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="600" src="@/assets/nate.jpeg" alt="">
        <img data-aos="fade-left" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="600" src="@/assets/nate2black.png" alt="">
    </section>
    <section class="askren">
        <div class="wrapping-content">
            <article>
                <p data-aos="fade" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="600">Now this time around Jake Paul managed to secure a <b>main event</b> against <b>retired MMA fighter</b> and <b>olympic wrestler Ben Askren</b>. Triller wanted to <b>up the level</b> in terms of <b>entertainment</b> by including more artists, setting up <b>multiple stages</b> with lots of <b>visuals</b>. The line-up consisted of: <b>Justin Bieber</b>, <b>The Black Keys</b>, <b>Doja Cat</b>, <b>Saweetie</b>, <b>Diplo</b>, <b>Major Lazer</b> and <b>Mt. Westmore</b>. So Triller really pulled out the <b>big guns</b> this time with their <b>line-up</b>. Not only did they hire artists, but they also got <b>different hosts</b> as well, such as comedian <b>Pete Davidson</b>, <b>Snoop Dogg</b>, Tiktok stars <b>Charli & Dixie Damelio</b> and more.</p>
            </article>
        </div>
        <figure>
            <img data-aos="fade-up" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="1600" src="@/assets/jb.png" alt="">
            <img data-aos="fade-down" data-aos-once="true" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="1500" src="@/assets/doja.png" alt="">
            <img data-aos="fade-up" data-aos-once="true" data-aos-delay="1100" data-aos-duration="1000" data-aos-offset="1500" src="@/assets/saweetie.png" alt="">
            <img data-aos="fade-down" data-aos-once="true" data-aos-delay="1200" data-aos-duration="1000" data-aos-offset="1500" src="@/assets/blackkeys.png" alt="">
        </figure>
    <div class="wrapping-content jake-askren">
        <h2 data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="600"> Jake Paul managed to <b>secure</b> his <b>3rd win</b> by <b>TKO</b> in the <b>first round</b>. The event appeared to have made over...</h2>
        <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="600">1.5 million PPV buys</h1>
        <h2 data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="600">and generating over <b>65 million dollars</b>!</h2>
    </div>
    <img class="jake-askren1" src="@/assets/jakeaskren.jpeg" alt="">
    <img class="jake-askren2" src="@/assets/askren.jpeg" alt="">
    <img class="jake-askren3" src="@/assets/jakepaulcelebration.jpeg" alt="">
    </section>
 <section class="upnext trillernext">
    <kinesis-container>
      <kinesis-element :strength="18"  type="translate" >
      <router-link to="/end">
      <h1 data-cursor-hover>up next</h1>
      </router-link>
      </kinesis-element>
    </kinesis-container>
      <h2>conclusion</h2>
    </section>
    <!-- <section class="upnext-shows">
      <section>
         <router-link to="/travis" >
        <article class="travis-thumb" >
        <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover>travis scott x fortnite </h2>
        </kinesis-element>
        </kinesis-container>
        </article>
        </router-link>
        <router-link to="/joji">
        <article class="joji-thumb">
         <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover>joji's
               <br> extravaganza</h2>
        </kinesis-element>
         </kinesis-container>
        </article>
        </router-link>
        <router-link to="/tomorrowland">
        <article class="tomorrowland-thumb">
         <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover>tomorrowland:
              <br>around the world</h2>
        </kinesis-element>
         </kinesis-container>
        </article>
        </router-link>
      </section>
    </section> -->
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
      gsap.from('.videoheader h1', {
        duration: 1.5,
        opacity: 0,
        delay: 3.4,
        y: 55,
        stagger: 0.2,
        ease: 'power3.out'
      })
      gsap.from('.videoheader h2', {
        duration: 0.6,
        opacity: 0,
        delay: 4.4,
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
