<template>
  <div class="about">
    <kinesis-container>
      <kinesis-element :strength="12"  type="depth" >
        <div class="wrapping-content">
          <h1 >welcome</h1>
          <h2 data-cursor-hover @click="play">begin</h2>
          <router-link to="/aboutpage">
            <h2 data-cursor-hover @click="play">about</h2>
          </router-link>
        </div>
    </kinesis-element>
  </kinesis-container>
          <p>a final work project by fady elabed / 2020 - 2021</p>

    <cursor-fx>
    </cursor-fx>
  </div>
</template>

<script>
import { useSound } from '@vueuse/sound'
import buttonSfx from '../assets/menusfx.mp3'

export default {
  setup () {
    const { play } = useSound(buttonSfx)
    return {
      play
    }
  }
}
</script>
