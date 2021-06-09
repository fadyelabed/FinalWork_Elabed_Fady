<template>
  <div class="tomorrowland" id="top">
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
        <span class="nav-active" data-cursor-hover>tomorrowland</span>
        </router-link>
        <router-link to="/triller">
        <span @mouseover="play({ id: 'navitem7' })" @mouseleave="stop" data-cursor-hover>triller fight club</span>
        </router-link>
        <router-link to="/">
        <p @mouseover="play({ id: 'navindex' })" @mouseleave="stop" data-cursor-hover>return to index / startscreen</p>
        </router-link>
    </Slide>
    <audio id="bgsong" autoplay>
      <source src="@/assets/comealive.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
          <router-link to="/splash">
          <img data-cursor-hover @click="play({ id:'menubacksfx'})" class="logo-top logo-absolute"  src="@/assets/logo3_white.svg" alt="">
          </router-link>

    <span class="mute-btn" onclick="muteAudio()"></span>
    <header class="videoheader">
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/tomorrowlanding.mp4" type="video/mp4">
      </video>
      <div class="wrapping-content">
          <article>
          <h2>july 16 & 17 / 2020</h2>
          <h1>tomorrowland:</h1>
          <h1>around the world</h1>
          </article>
      </div>
    </header>
    <section class="tmrw-intro">
        <div class="wrapping-content">
            <article>
                <p data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="300"><b>Tomorrowland</b> probably known as <b>one of the biggest festivals</b> around the globe launched their first ever <b>digital edition</b>. Tomorrowland: Around the World took place over <b>the weekend</b>, being a <b>two-day digital experience</b>, not located in Boom this time, but on the <b>Pāpiliōnem island</b>. This digital solution was made due to <b>covid restrictions</b>. More than <b>60 of the most prominent artists were</b> in attendance to perform their newest songs on one of the <b>8 different stages</b>.</p>
            </article>
        </div>
    </section>
    <section class="tmrw-highlights">
        <div class="wrapping-content">
            <h2 data-aos="fade" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="300">highlights in numbers:</h2>
        <section data-aos="fade-up" data-aos-once="true" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="300">
            <article>
                <img src="@/assets/eye_icon.svg" alt="">
                <h2>1M</h2>
                <p>More than <b>1 million viewers</b> were tuned in watching the very <b>first edition</b> of this <b>festival</b>. With various viewers ranging from <b>Japan</b> to <b>Mexico</b> and <b>Iceland</b>.</p>
            </article>
        </section>
        <section data-aos="fade-up" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="300">
            <article>
                <img src="@/assets/studio_icon.svg" alt="">
                <h2>4</h2>
                <p>Tomorrowland has built <b>4 different</b> large green screen <b>studios</b> across different locations. Belgium <b>(Boom)</b>, USA <b>(Los Angeles)</b>, Brazil <b>(Sao Paolo)</b> and Australia <b>(Sydney)</b>. Over 60 artists <b>recorded</b> their performance <b>in those studios</b>, including big names like <b>Katy Perry</b>, <b>David Guetta</b>, <b>Martin Garrix</b>, <b>Steve Aoki</b>, <b>Eric Prydz</b> and many more. The sets were <b>6m</b> or higher,<b>8m</b> wide and deep.</p>
            </article>
        </section>
        <section data-aos="fade-up" data-aos-once="true" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="300">
            <article>
                <img src="@/assets/camera_icon.svg" alt="">
                <h2>38</h2>
                <p>Besides the <b>6 4K Ultra HD cameras</b> used, there were <b>multiple virtual cameras</b> created per stage, allowing the director to <b>pick between 38 cameras</b> during the live recordings. The <b>3D environment</b> of the festival has <b>10 times more polygons</b> and <b>lights</b> compared to a <b>videogame</b>. More than <b>300 TB of footage</b> was collected in total during this whole event.</p>
            </article>
        </section>
        <section data-aos="fade-up" data-aos-once="true" data-aos-delay="1100" data-aos-duration="1000" data-aos-offset="300">
            <article>
                <img src="@/assets/code_icon.svg" alt="">
                <h2>3</h2>
                <p>Tomorrowland <b>collaborated</b> with the <b>most talented developers</b> to get everything <b>done in time</b>. They succeeded to opening their digital doors <b>in just 3 months</b> of hard work.</p>
            </article>
        </section>
        </div>
        <figure>
            <img data-aos="fade" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="300" src="@/assets/tmrwland1.jpg" alt="">
            <img data-aos="fade" data-aos-once="true" data-aos-delay="600" data-aos-duration="1000" data-aos-offset="300" src="@/assets/tmrwland2.jpg" alt="">
            <img data-aos="fade" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="300" src="@/assets/tmrwland3.jpg" alt="">
            <img data-aos="fade" data-aos-once="true" data-aos-delay="900" data-aos-duration="1000" data-aos-offset="300" src="@/assets/tmrwland4.jpg" alt="">
        </figure>
    </section>
    <section class="tmrw-bts">
        <video data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="300" controls>
            <source src="@/assets/tomorrowlandbts.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <article data-aos="fade" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="600" class="float-left">
            <p>Here's a <b>closer look</b> at some of the <b>behind the scenes</b>. Mainstream artist <b>Martin Garrix</b> explains how they <b>reached out to him</b>, also explaining how everything fell into place.</p>
            <p>2020's digital edition of Tomorrowland was considered <b>a huge success</b>. It won the prestigious <b>FWA of the Month</b> (the largest online award program in digital design and development) and selected as <b>an Official Webby Award Winner</b> (the leading international award honoring excellence on the internet). This edition was <b>praised</b> for <b>pushing boundaries</b> using <b>cutting-edge technology</b> to really <b>immerse</b> the fans into <b>a digital experience</b> like never before.</p>
        </article>
        <article data-aos="fade" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="600" class="float-left">
            <p>Now let's have a look at how all this technology came together to create a <b>virtual / 3D environment</b>. Here's one of <b>Katy Perry's</b> performances. Take a look at how she performed her hit song <b>'Fireworks'</b>. You also get to see the <b>fictional crowd</b> and <b>atmosphere</b> <b>in all its glory</b>.</p>
        </article>
        <video data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="600" controls class="float-right">
            <source src="@/assets/katyperry2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </section>
    <section class="upnext-shows">
      <!-- <h1>up next</h1> -->
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
        <router-link to="/triller">
        <article class="triller-thumb">
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
