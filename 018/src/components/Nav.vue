<template>
  <div class="nav-wrapper">

    <ul class="nav">
      <li v-for="item in routes" :class="item.meta">
          <router-link :to="item.path" >{{item.name}}</router-link>
      </li>
  </ul>
  <div>

  </div>
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
