<template>

  <div class="home">

    <router-link to="/about">
    <h1 data-cursor-hover data-cursor-mix-blend-mode="difference"
>pandemic +</h1>
    <h1>streaming</h1>
    <h1>=</h1>
    <h1>pandeaming</h1>
</router-link>
<p>click anywhere to enter</p>
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
