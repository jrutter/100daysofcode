<template>
  <div class="nav-wrapper">
    <ul class="nav">
      <li><a href="/#/">Add your stash</a></li>
      <li><a href="/#/log">Stash Log</a></li>
      <li><a href="/#/user/register">Sign up to Stash</a></li>
      <li><a href="/#/user/login">Log-in to Stash</a></li>
    </ul>

    <ul>
      <li v-for="item in routes">
          <h3>{{item.path}}</h3>
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
