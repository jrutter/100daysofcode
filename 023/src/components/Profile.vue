<template>
<div>

  <header>
      <div class="logo"><a href="#">Daily Stash</a></div>
      <nav-bar></nav-bar>
  </header>

      <div class="container">
          <div id="content">
              <h1>User Profile</h1>

              <div v-if="authenticated">
                <p>Name: {{profile.nickname}}</p>
                <p>Email: {{profile.name}}</p>
                <p><img :src="profile.picture"/></p>

                <a @click="auth.logout()">Log out</a>

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
      this.profile = JSON.parse(getProfile)
      console.log('retrievedObject: ', this.profile)
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
