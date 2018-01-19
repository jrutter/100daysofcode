<template>
<div>

  <header>
      <a href="#">Status Stash</a>
  </header>

  <nav-bar></nav-bar>

      <div class="container">
          <div id="content">
              <h1>User Profile</h1>

              <div v-if="authenticated">

              </div>
              <div v-if="!authenticated">
                You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
              </div>

          </div>
      </div>

</div>
</template>

<script>
import NavBar from '@/components/Nav'

export default {
  name: 'Add',
  props: ['auth', 'authenticated'],
  components: {
    NavBar
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
