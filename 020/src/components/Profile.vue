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
                <p>Email: {{profile.name}}</p>
                <img :src="profile.picture"/>

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
      items: [],
      profile: ''
    }
  },
  mounted: function () {
    this.loadProfile()
  },
  methods: {
    loadProfile: function () {
      let getProfile = localStorage.getItem('userProfile')
      this.profile = JSON.parse(getProfile);
      console.log('retrievedObject: ',this.profile)
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
