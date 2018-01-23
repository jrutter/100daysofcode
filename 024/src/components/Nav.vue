<template>

    <div v-if="authenticated">
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="/add">Add Stash</a>
        <a class="p-2 text-dark" href="/profile">Profile</a>
        <a class="p-2 text-dark" href="/log">My Stash</a>
      </nav>
    </div>

    <div v-else-if="!authenticated">
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="/home">Features</a>
        <a class="p-2 text-dark" href="/home">Support</a>
        <a class="p-2 text-dark" href="/home">Pricing</a>
        <a class="p-2 text-dark" @click="auth.login()">Log-in</a>
      </nav>
    </div>


</template>

<script>
  import routesArray from '@/router/'
  export default {
    name: 'NavBar',
    props: ['auth', 'authenticated'],
    data () {
      return {
        routes: routesArray.options.routes
      }
    }
  }
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
