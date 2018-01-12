<template>
  <div class="nav-wrapper">
    <ul class="nav">
      <li><a href="/#/">Add your stash</a></li>
      <li><a href="/#/log">Stash Log</a></li>
      <li><a href="/#/user/register">Sign up to Stash</a></li>
      <li><a href="/#/user/login">Log-in to Stash</a></li>
    </ul>

    <ul class="nav">
      <li v-for="item in routes">
          <router-link :to="item.path">{{item.name}}</router-link>
      </li>
  </ul>
  </div>
</template>

<script>
  import routesArray from '@/router/'
  export default {
    name: 'NavBar',
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
