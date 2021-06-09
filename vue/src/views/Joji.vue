<template>
  <div class="joji" id="top">
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
        <span class="nav-active" data-cursor-hover>joji's extravaganza</span>
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
    <audio id="bgsong" autoplay>
      <source src="@/assets/yeahrightbg.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
          <router-link to="/splash">
          <img data-cursor-hover @click="play({ id:'menubacksfx'})" class="logo-top logo-absolute"  src="@/assets/logo2_white.svg" alt="">
          </router-link>

    <span class="mute-btn" onclick="muteAudio()"></span>
    <header class="videoheader">
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/jojiheader.mp4" type="video/mp4">
      </video>
      <div class="wrapping-content">
          <article>
          <h2>october 23-24 / 2020</h2>
          <h1>joji presents</h1>
          <h1>the extravaganza</h1>
          </article>
      </div>
    </header>
    <section class="joji-about">
        <div class="wrapping-content">
          <h1 data-aos="fade-left" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" >the </h1>
          <h1 data-aos="fade-left" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000" >creative</h1>
          <h1 data-aos="fade-left" data-aos-once="true" data-aos-delay="1000" data-aos-duration="1000" >mind</h1>
          <h1 data-aos="fade-left" data-aos-once="true" data-aos-delay="1100" data-aos-duration="1000" >behind it</h1>
          <article data-aos="fade-up" data-aos-once="true" data-aos-delay="1100" data-aos-duration="1300">
            <p><b>Joji</b>, 88rising star formerly known as <b>'Filthy Frank'</b> on YouTube, held his <b>first virtual show</b> ever after <b>releasing</b> his second studio album <b>'NECTAR'</b>. On Saturday <b>(Oct 24th)</b> George Miller broadcasted this <b>unique event</b> on his website, with <b>3 different sessions</b> for different timezones.</p>
          </article>
        </div>
        <img data-aos="fade-left" data-aos-once="true" data-aos-delay="1100" data-aos-duration="1600"  src="@/assets/joji.jpeg" alt="">
    </section>
    <section class="joji-intro">
      <div class="wrapping-content">
      <article>
        <p data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="500"><b>Most of the songs</b> performed during Extravaganza were from his <b>latest project</b>, but also included some <b>fan-favorites</b> such as '<span>Yeah Right</span>', '<span>Slow Dancing in The Dark</span>' and '<span>Attention</span>'. This whole show was <b>full of surprises</b>. Filled with various <b>skits</b>, <b>talent shows</b>, different <b>challenges</b> in between and during performances. Each of them <b>representing</b> the artist's <b>personality</b> in a comedic manner.</p>
      </article>
      </div>
    </section>
    <section class="joji-shows">
        <video data-aos="fade-left" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="500"  controls>
            <source src="@/assets/sanctuary.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <article data-aos="fade-left" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="500"  class="padding-article float-right">
          <p><b>Opening the show</b> sitting atop a <b>dunk tank</b> while singing <b>'Sanctuary'</b>, various candidates <b>took their turn</b> to <b>disrupt</b> Joji's singing by <b>hitting</b> the <b>target</b> with a baseball. Reaching the end, a baseball player got his turn and <b>managed</b> to get the job done, <b>leaving the singer</b> behind singing <b>in deep water</b>.</p>
        </article>
    </section>
    <section class="joji-shows">
        <img data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="500" src="@/assets/attention.png" alt="">
        <img data-aos="fade-up" data-aos-once="true" data-aos-delay="800" data-aos-duration="1200" data-aos-offset="500" src="@/assets/tiktok.png" alt="">
        <article class="padding-article text-center">
        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="500" >Across all performances you'll see him make <b>interesting costume choices</b> that may leave u <b>distracted</b>. Such as his follow-up performance, when he sang '<b>Attention'</b> while wearing a <b>horse costume</b>. Or during his <b>'Tick Tock'</b> performance, when he wore a <b>minions</b> costume for some reason</p>
        </article>
    </section>
     <section class="joji-shows">
        <video data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="350"  class="float-right" controls>
            <source src="@/assets/yourman.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <article  class="padding-article" >
        <p data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="350" > Not only can George sing, but he can also <b>multitask</b> as well, seen in his performance <b>'Your Man'</b> where he makes an <b>omelette while singing</b>. The <b>stars backdrop</b> combined with the <b>aliens</b> assisting him in his cooking makes for quite an <b>enjoyable</b> performance.</p>
        </article>
    </section>
    <section class="joji-shows bg-orange">
        <article class="padding-article">
          <p data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="350" >Now <b>I wont be</b> talking about <b>every single</b> performance of the show, but some of the more <b>memorable</b> performances were the ones like <b>'Pretty Boy'</b> where he was performing in an <b>octagon</b> as the <b>referee</b> while 2 fighters <b>battled</b> their way through <b>victory</b>. Or during <b>'Run'</b> as the singer went through an <b>obstacle course</b> and ended up on a <b>treadmill</b> literally <b>running</b> while performing his song called <b>'Run'</b>.</p>
        </article>
        <video data-aos="fade-left" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="350" class="float-right" autoplay muted loop>
            <source src="@/assets/prettyboy.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <video data-aos="fade-right" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="150" class="float-left" autoplay muted loop>
            <source src="@/assets/run.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </section>
      <section class="joji-shows bg-dark">
        <div class="wrapping-content">
        <article class="padding-article">
        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="500">This whole theatrical event just <b>reminded</b> us that this singer- songwriter was once a <b>celebrated internet personality</b> known as <b>'Filthy Frank'</b>. He pulled off an <b>out of the ordinary</b>, <b>enjoyable</b>, <b>unexpected</b> show. Setting the bar <b>high</b> for future digital concerts, and <b>setting himself aside</b> from the generic regular live shows where artists <b>just perform their songs</b> and call it a day.</p>
        </article>
        </div>

    </section>
    <section class="upnext-shows">
      <!-- <h1>up next</h1> -->
      <section>
         <router-link to="/travis" >
        <article data-aos="fade-up" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="300" class="travis-thumb" >
        <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover>travis scott x fortnite </h2>
        </kinesis-element>
        </kinesis-container>
        </article>
        </router-link>
        <router-link to="/tomorrowland">
        <article data-aos="fade-up" data-aos-once="true" data-aos-delay="1100" data-aos-duration="1000" data-aos-offset="300" class="tomorrowland-thumb">
         <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover>tomorrowland:
              <br>around the world</h2>
        </kinesis-element>
         </kinesis-container>
        </article>
        </router-link>
        <router-link to="/triller">
        <article data-aos="fade-up" data-aos-once="true" data-aos-delay="1200" data-aos-duration="1000" data-aos-offset="300" class="triller-thumb">
         <kinesis-container>
        <kinesis-element :strength="18"  type="depth" >
            <h2 data-cursor-hover> triller fight club</h2>
        </kinesis-element>
         </kinesis-container>
        </article>
        </router-link>
      </section>
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
      gsap.from('.videoheader h1', {
        duration: 1.5,
        opacity: 0,
        delay: 3.4,
        y: 55,
        stagger: 0.2,
        ease: 'power3.out'
      })
      gsap.from('.videoheader h2', {
        duration: 1,
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
