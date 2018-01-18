<template>
<div>

  <header>
      <a href="#">Status Stash</a>
  </header>

  <nav-bar></nav-bar>


      <div class="container">
          <div id="content">
              <h1>What's your current status?</h1>

              <form>
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
              </form><!-- // End form -->

          </div>
      </div>

</div>
</template>

<script>

import { StitchClient } from 'mongodb-stitch'
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
    saveStatus: function (event) {
      // event.preventDefault()
      var self = this

      let appId = 'statusstash-dnwjj'
      let stitchClient = new StitchClient(appId)

      let db = stitchClient.service('mongodb', 'mongodb-atlas').db('StatusStash')
      let items = db.collection('standup')
      console.log('items', items)
      items.insertOne({
        name: self.name,
        email: self.email,
        today: self.today,
        yesterday: self.yesterday,
        blocker: self.blocker,
        owner_id: stitchClient.authedId()
      }).then((data) => {
        console.log('data', data)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
