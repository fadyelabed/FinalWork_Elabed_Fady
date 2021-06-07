<template>
  <div class="bronnen" id="top">
      <div class="wrapping-content">
        <router-link to="/end" >
        <img data-cursor-hover class="arrowleft" src="@/assets/arrowdown.svg" alt="">
        </router-link>
          <p>how the pandemic affected the music industry:</p>
          <a href="https://www.theguardian.com/music/2020/dec/18/how-the-pandemic-affected-the-music-industry" target="_blank">https://www.theguardian.com/music/2020/dec/18/how-the-pandemic-affected-the-music-industry</a>
          <a href="https://en.wikipedia.org/wiki/Impact_of_the_COVID-19_pandemic_on_the_music_industry" target="_blank">https://en.wikipedia.org/wiki/Impact_of_the_COVID-19_pandemic_on_the_music_industry</a>
          <a href="https://blog.uniqodo.com/music-industry-response-to-pandemic" target="_blank">https://blog.uniqodo.com/music-industry-response-to-pandemic</a>
          <a href="https://www.weforum.org/agenda/2020/05/this-is-how-covid-19-is-affecting-the-music-industry/" target="_blank">https://www.weforum.org/agenda/2020/05/this-is-how-covid-19-is-affecting-the-music-industry/</a>
          <p>virtual shows articles:</p>
          <a href="https://www.bandwagon.asia/articles/virtual-concert-show-dua-lipa-billie-eilish-bts-joji-justin-bieber-nct-sb19-alden-richards-woodz-tesseract-lamb-of-god-linkin-park-tomorrowland-new-normal-pandemic-quarantine-2020" target="_blank">https://www.bandwagon.asia/articles/virtual-concert-show-dua-lipa-billie-eilish-bts-joji-justin-bieber-nct-sb19-alden-richards-woodz-tesseract-lamb-of-god-linkin-park-tomorrowland-new-normal-pandemic-quarantine-2020</a>
          <a href="https://www.theverge.com/2020/4/23/21233637/travis-scott-fortnite-concert-astronomical-live-report" target="_blank">https://www.theverge.com/2020/4/23/21233637/travis-scott-fortnite-concert-astronomical-live-report</a>
          <a href="https://www.bandwagon.asia/articles/joji-showcases-what-it-means-to-be-a-full-fledged-performer-in-his-first-concert-the-extravaganza-88rising-virtual-live-stream-show-review-2020" target="_blank">https://www.bandwagon.asia/articles/joji-showcases-what-it-means-to-be-a-full-fledged-performer-in-his-first-concert-the-extravaganza-88rising-virtual-live-stream-show-review-2020</a>
          <a href="https://tomorrowlandaroundtheworld.press.tomorrowland.com/tomorrowland-around-the-world-in-numbers" target="_blank">https://tomorrowlandaroundtheworld.press.tomorrowland.com/tomorrowland-around-the-world-in-numbers</a>
          <a href="https://www.vice.com/en/article/5dbzj5/what-is-triller-fight-club-snoop-doggs-weird-celebrity-boxing-league" target="_blank">https://www.vice.com/en/article/5dbzj5/what-is-triller-fight-club-snoop-doggs-weird-celebrity-boxing-league</a>
          <a href="https://thefightclub.com/PaulAskren/" target="_blank">https://thefightclub.com/PaulAskren/</a>
          <a href="https://tysonontriller.com/" target="_blank">https://tysonontriller.com/</a>

      </div>
    <cursor-fx>
    </cursor-fx>
  </div>
</template>

<script>
import { useSound } from '@vueuse/sound'
import backButtonSfx from '../assets/menubacksfx.mp3'
import { gsap } from 'gsap'
// import { Slide } from 'vue-burger-menu'

// import Drawer from 'vue-simple-drawer'

export default {
  name: 'home',
  components: {
    // Slide
  },
  mounted: function () {
    this.startAnimations()
  },
  methods: {
    startAnimations: function () {
      gsap.from('h1', {
        duration: 1.5,
        opacity: 0,
        delay: 3.4,
        y: 55,
        stagger: 0.2,
        ease: 'power3.out'
      })
      gsap.from('.arrowdown', {
        duration: 1.8,
        opacity: 0,
        delay: 4.4,
        y: -55,
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
