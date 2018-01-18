<template>
<div>

  <header>
      <a href="#">Status Stash</a>
  </header>

  <nav-bar></nav-bar>


      <div class="container">
          <div id="content">
              <h1>What's your current status?</h1>

                <div class="name">
                  <label for="name_input"></label>
                  <input type="text" placeholder="My name is" v-model="name" id="name_input">
                </div>
                <div class="email">
                  <label for="email"></label>
                  <input type="email" placeholder="My e-mail is" v-model="email" id="email_input" required>
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
</template>

<script>

import axios from 'axios'
import NavBar from '@/components/Nav'

export default {
  name: 'Add',
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
      yesterday: ''
    }
  },
  methods: {
    saveStatus: function () {
      var self = this
      var apiKey = 'lAsBHd1474tcG5UNO_KlBFCb5nUWEtt-'

      axios.post('https://api.mlab.com/api/1/databases/standup/collections/stash?apiKey=' + apiKey,
        {
          name: self.name,
          email: self.email,
          today: self.today,
          yesterday: self.yesterday,
          blocker: self.blocker
        }).then(function (response) {
          console.log('response', response)
          self.entries = response.data
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
