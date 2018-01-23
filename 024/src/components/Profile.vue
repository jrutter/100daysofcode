<template>
<div>

  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Daily Stash</h5>
      <nav-bar :auth="auth"
      :authenticated="authenticated"></nav-bar>
        <a class="btn btn-outline-primary" @click="auth.login()" v-if="!authenticated">Sign up</a>
        <a class="btn btn-outline-primary" @click="auth.logout()" v-if="authenticated">Log-out</a>
    </div>

      <div class="container">
          <div id="content">
              <h1>User Profile</h1>

              <div v-if="authenticated">
                <p>Name: {{profile.nickname}}</p>
                <p>Email: {{profile.name}}</p>
                <p><img :src="profile.picture"/></p>

                <a @click="auth.logout()">Log out</a>

              </div>
              <div v-else-if="!authenticated">
                You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
              </div>



          </div>
      </div>

      <footer class="text-muted">
      <div class="container">
        <p>&copy; 2018 Daily Stash!</p>
      </div>
    </footer>

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
