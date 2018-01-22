<template>
<div>

  <header>
      <a href="#">Status Stash</a>
  </header>

  <nav-bar></nav-bar>

      <div class="container">
          <div id="content">
              <h1>Welcome to Status Stash</h1>

              <div v-if="authenticated">


                  <p>You are logged in!, now you can.</p>
                  <div class="intro-grid">
                    <div>Add your status</div>
                    <div>See a list of past statuses</div>
                    <a href="/profile">View my profile</a>
                    <a @click="auth.logout()">Log out</a>

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
