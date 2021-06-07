<template>
  <div class="triller" id="top">
    <Slide :width="1400" data-cursor-hover class="white-menu">
        <router-link to="/home">
          <span data-cursor-hover>Home</span>
        </router-link>
        <router-link to="/sales">
        <span data-cursor-hover >sales & streaming</span>
        </router-link>
        <router-link to="/advertising">
        <span data-cursor-hover >advertising & distribution</span>
        </router-link>
        <router-link to="/virtualshows">
        <span data-cursor-hover>virtual shows</span>
        </router-link>
        <router-link to="/travis">
        <span data-cursor-hover >travis x fortnite</span>
        </router-link>
        <router-link to="/joji">
        <span  data-cursor-hover>joji's extravaganza</span>
        </router-link>
        <router-link to="/tomorrowland">
        <span  data-cursor-hover>tomorrowland</span>
        </router-link>
        <router-link to="/triller">
        <span class="nav-active" data-cursor-hover>triller fight club</span>
        </router-link>
        <router-link to="/">
        <p data-cursor-hover>return to index / startscreen</p>
        </router-link>
    </Slide>
    <audio id="bgsong" autoplay>
      <source src="@/assets/problems.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
          <router-link to="/splash">
      <img data-cursor-hover @click="play" class="logo-top logo-absolute"  src="@/assets/logo1_white.svg" alt="">
          </router-link>
    <span class="mute-btn" onclick="muteAudio()"></span>
    <header class="videoheader">
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/trillerheader.mp4" type="video/mp4">
      </video>
      <div class="wrapping-content">
          <article>
          <h2>november 28 - 2020 / april 17th - 2021</h2>
          <h1>
              triller fight club
          </h1>
          </article>
      </div>
    </header>
    <section class="tysonjones">
        <div class="wrapping-content">
            <h1>merging the boxing and entertainment world together</h1>
            <article>
                <p>On April 17th Triller hosted their second boxing event. The first one being the Tyson vs Jones event that was organized on November 28th 2020.</p><p>You're probably wondering why I'm talking about boxing all of a sudden, well Triller is the first platform to establish an event in this sort of manner. Basically they had the idea to host a boxing event and have multiple artists present to perform in between fights. So you would have the enjoyment of being able to watch these fights and see these live artists perform, which creates for a very cool dynamic. The Tyson vs Jones event had appearances from French Montana, Wiz Khalifa, Snoop Dogg, YG, Ne-yo and Saint JHN.</p>
            </article>
                     <img class="trillerlogo" src="@/assets/trillerlogo.jpeg" alt="">
        </div>
    <img src="@/assets/tysonjones.webp" alt="">
    </section>
    <section class="jakepaul">
        <div class="wrapping-content">
            <article>
                <p>The main event Mike Tyson against Roy Jones Jr. was an exhibition fight which means that it wouldn't affect their professional records. The fight was surprisingly entertaining considering the 2 are over the age of 50. This matchup resulted in a draw. Not to mention the recent hype of influencer boxing in which YouTuber Jake Paul was both involved in. Jake Paul was up against former NBA-player Nate Robinson. Jake Paul unsurprisingly knocked out Nate in the 2nd round, which resulted in him stealing the show and going viral for his impressive performance. </p>
            </article>
        </div>
         <img src="@/assets/nate.jpeg" alt="">
        <img src="@/assets/nate2black.png" alt="">
    </section>
    <section class="askren">
        <div class="wrapping-content">
            <article>
                <p>Now this time around Jake Paul managed to secure a main event against retired MMA fighter and olympic wrestler Ben Askren. Triller wanted to up the level in terms of entertainment by including more artists, setting up multiple stages with lots of visuals. The line-up consisted of: Justin Bieber, The Black Keys, Doja Cat, Saweetie, Diplo, Major Lazer and Mt. Westmore. So Triller really pulled out the big guns this time with their line-up. Not only did they hire artists, but they also got different hosts as well, such as comedian Pete Davidson, Snoop Dogg, Tiktok stars Charli & Dixie Damelio and more.</p>
            </article>
        </div>
        <figure>
            <img src="@/assets/jb.png" alt="">
            <img src="@/assets/doja.png" alt="">
            <img src="@/assets/saweetie.png" alt="">
            <img src="@/assets/blackkeys.png" alt="">
        </figure>
    <div class="wrapping-content jake-askren">
        <h2> Jake Paul managed to secure his 3rd win by TKO in the first round. The event appeared to have made over...</h2>
        <h1>1.5 million PPV buys</h1>
        <h2>and generating over 65 million dollars!</h2>
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
    const { play } = useSound(backButtonSfx)
    return {
      play
    }
  }
}
</script>
