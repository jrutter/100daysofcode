<template>
<div>

  <header>
      <div class="logo"><a href="#">Daily Stash</a></div>
      <nav-bar></nav-bar>
  </header>


      <div class="container">
          <div id="content">
              <h1>What's your current status?</h1>


              <div v-if="!authenticated">
                You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
              </div>

              <div v-if="authenticated">
                <a @click="auth.logout()">Log out</a>

                <div class="name">
                  <input type="hidden" v-model="name">
                </div>
                <div class="email">
                  <input type="hidden" v-model="email">
                </div>

                <div class="message">
                  <label for="today"></label>
                  <textarea v-model="today" placeholder="What did you do yesterday?" id="today" cols="30" rows="5" ></textarea>
                </div>
                <div class="message">
                  <label for="yesterday"></label>
                  <textarea v-model="yesterday" placeholder="What are you planning on doing today?" id="yesterday" cols="30" rows="5" ></textarea>
                </div>
                <div class="message">
                  <label for="blocker"></label>
                  <textarea v-model="blocker" placeholder="Do you have any blockers?" id="blocker" cols="30" rows="5" ></textarea>
                </div>
                <div class="submit">
                  <input type="submit" value="Save Status" id="form_button" v-on:click="saveStatus(event)"/>
                </div>
              </div>


          </div>
      </div>

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
