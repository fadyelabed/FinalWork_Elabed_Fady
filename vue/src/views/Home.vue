<template>

  <div class="home">

    <router-link to="/about">
    <h1 data-cursor-hover data-cursor-mix-blend-mode="difference" @click="play">pandemic +</h1>
    <h1 data-cursor-hover @click="play">streaming</h1>
    <h1 data-cursor-hover @click="play">=</h1>
    <h1 data-cursor-hover @click="play">pandeaming</h1>
<p data-cursor-hover @click="play">click anywhere to enter</p>
</router-link>

    <cursor-fx>
    </cursor-fx>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { useSound } from '@vueuse/sound'
import splashBtnSfx from '../assets/splashsfx.mp3'
import { CursorFx } from '@luxdamore/vue-cursor-fx'
export default {
  name: 'Home',
  components: {
    'cursor-fx': CursorFx
  },
  setup () {
    const { play } = useSound(splashBtnSfx)
    return {
      play
    }
  }
}
</script>
