<template>

  <div class="home">

    <router-link to="/about">
    <h1 data-cursor-hover data-cursor-mix-blend-mode="difference">pandemic +</h1>
    <h1 data-cursor-hover>streaming</h1>
    <h1 data-cursor-hover>=</h1>
    <h1 data-cursor-hover>pandeaming</h1>
<p data-cursor-hover>click anywhere to enter</p>
</router-link>

    <cursor-fx>
    </cursor-fx>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { CursorFx } from '@luxdamore/vue-cursor-fx'
export default {
  name: 'Home',
  components: {
    'cursor-fx': CursorFx
  }
}
</script>
