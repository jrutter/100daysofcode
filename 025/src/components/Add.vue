<template>
<div>

  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Daily Stash</h5>
      <nav-bar :auth="auth"
      :authenticated="authenticated"></nav-bar>
        <a class="btn btn-outline-primary" @click="auth.login()" v-if="!authenticated">Sign up</a>
        <a class="btn btn-outline-primary" @click="auth.logout()" v-else-if="authenticated">Log-out</a>
    </div>


      <div class="container">
          <div id="content">
              <h1>What's your current status?</h1>


              <div v-if="!authenticated">
                You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
              </div>

              <div v-else-if="authenticated">





                <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Preview Status</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <small class="text-muted">{{yesterday}}</small>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <small class="text-muted">{{today}}</small>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <small class="text-muted">{{blocker}}</small>
              </div>
            </li>


          </ul>
        </div>
        <div class="col-md-8 order-md-1">

            <div class="name">
              <input type="hidden" v-model="name">
            </div>
            <div class="email">
              <input type="hidden" v-model="email">
            </div>


            <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Yesterday?</span>
            </div>
            <textarea class="form-control" v-model="yesterday" aria-label="With textarea"></textarea>
          </div>

          <br>

          <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Today?</span>
          </div>
          <textarea class="form-control" v-model="today" aria-label="With textarea"></textarea>
        </div>

        <br>


        <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Blockers?</span>
        </div>
        <textarea class="form-control" v-model="blocker" aria-label="With textarea"></textarea>
      </div>





            <hr class="mb-4">
            <button class="btn btn-primary btn-lg btn-block" type="submit" v-on:click="saveStatus(event)">Add Status</button>
        </div>
      </div>
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

import axios from 'axios'
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
      searchResults: '',
      name: '',
      email: '',
      blocker: '',
      today: '',
      yesterday: '',
      profile: ''
    }
  },
  mounted: function () {
    this.loadProfile()
  },
  methods: {
    loadProfile: function () {
      let getProfile = localStorage.getItem('userProfile')
      let profileObj = JSON.parse(getProfile)
      this.profile = profileObj
      this.email = profileObj.name
      this.name = profileObj.nickname
    },
    saveStatus: function () {
      var self = this
      var apiKey = 'lAsBHd1474tcG5UNO_KlBFCb5nUWEtt-'

      axios.post('https://api.mlab.com/api/1/databases/standup/collections/stash?apiKey=' + apiKey,
        {
          name: self.name,
          email: self.email,
          today: self.today,
          yesterday: self.yesterday,
          blocker: self.blocker,
          created_at: Date.now()

        }).then(function (response) {
          self.entries = response.data
          self.$router.push('/log')
        }).catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
