<template>
  <div class="tomorrowland" id="top">
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
        <span class="nav-active" data-cursor-hover>tomorrowland</span>
        </router-link>
        <router-link to="/triller">
        <span data-cursor-hover>triller fight club</span>
        </router-link>
        <router-link to="/">
        <p data-cursor-hover>return to index / startscreen</p>
        </router-link>
    </Slide>
    <audio id="bgsong" autoplay>
      <source src="@/assets/comealive.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
          <router-link to="/splash">
      <img data-cursor-hover @click="play" class="logo-top logo-absolute"  src="@/assets/logo1_white.svg" alt="">
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
                <p data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="300">Tomorrowland probably known as one of the biggest festivals around the globe launched their first ever digital edition. Tomorrowland: Around the World took place over the weekend, being a two-day digital experience, not located in Boom this time, but on the Pāpiliōnem island. This digital solution was made due to covid restrictions. More than 60 of the most prominent artists were in attendance to perform their newest songs on one of the 8 different stages.</p>
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
                <p>More than 1 million viewers were tuned in watching the very first edition of this festival. With various viewers ranging from Japan to Mexico and Iceland.</p>
            </article>
        </section>
        <section data-aos="fade-up" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="300">
            <article>
                <img src="@/assets/studio_icon.svg" alt="">
                <h2>4</h2>
                <p>Tomorrowland has built 4 different large green screen studios across different locations. Belgium (Boom), USA (Los Angeles), Brazil (Sao Paolo) and Australia (Sydney). Over 60 artists recorded their performance in those studios, including big names like Katy Perry, David Guetta, Martin Garrux, Steve Aoki, Eric Prydz and many more. The sets were 6m or higher, 8m wide and deep.</p>
            </article>
        </section>
        <section data-aos="fade-up" data-aos-once="true" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="300">
            <article>
                <img src="@/assets/camera_icon.svg" alt="">
                <h2>38</h2>
                <p>Besides the 6 4K Ultra HD cameras used, there were multiple virtual cameras created per stage, allowing the director to pick between 38 cameras during the live recordings. The 3D environment of the festival has 10 times more polygons and lights compared to a videogame. More than 300 TB of footage was collected in total during this whole event.</p>
            </article>
        </section>
        <section data-aos="fade-up" data-aos-once="true" data-aos-delay="1100" data-aos-duration="1000" data-aos-offset="300">
            <article>
                <img src="@/assets/code_icon.svg" alt="">
                <h2>3</h2>
                <p>Tomorrowland collaborated with the most talented developers to get everything done in time. They succeeded to opening their digital doors in just 3 months of hard work.</p>
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
            <p>Here's a closer look at some of the behind the scenes. Mainstream artist Martin Garrix explains how they reached out to him, also explaining how everything fell into place.</p>
            <p>2020's digital edition of Tomorrowland was considered a huge success. It won the prestigious FWA of the Month (the largest online award program in digital design and development) and selected as an Official Webby Award Winner (the leading international award honoring excellence on the internet). This edition was praised for pushing boundaries using cutting-edge technology to really immerse the fans into a digital experience like never before.</p>
        </article>
        <article data-aos="fade" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="600" class="float-left">
            <p>Here's one of Katy Perry's performances. Take a look at how she performed her hit song 'Fireworks'. You also get to see the 3D environment/stage and atmosphere in all its glory.</p>
        </article>
        <video data-aos="fade-up" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="600" controls class="float-right">
            <source src="@/assets/katyperry.mp4" type="video/mp4">
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
    const { play } = useSound(backButtonSfx)
    return {
      play
    }
  }
}
</script>
