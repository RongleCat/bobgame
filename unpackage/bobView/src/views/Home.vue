<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TheTabber></TheTabber>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheTabber from '@/components/TheTabbar.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TheTabber
  }
}
</script>
