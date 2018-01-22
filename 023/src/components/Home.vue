<template>
<div>

  <header>
      <div class="logo"><a href="#">Daily Stash</a></div>
      <nav-bar></nav-bar>
  </header>



      <div class="container">
          <div id="content">
              <h1>Welcome to Status Stash</h1>

              <div v-if="authenticated">
                  <div class="intro-grid">
                    <div>Add your status</div>
                    <div>See a list of past statuses</div>
                  </div>
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
