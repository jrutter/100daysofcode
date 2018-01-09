<template>
<div>
<header>
    <a href="#">Status Stash</a>
</header>

<ul class="nav">
  <li><a href="/#/">Add your stash</a></li>
  <li><a href="/#/log">Stash Log</a></li>
  <li><a href="/#/user/register">Sign up to Stash</a></li>
  <li><a href="/#/user/login">Log-in to Stash</a></li>
</ul>

      <div class="container">
          <div id="content">

            <h1>Sign up for an account</h1>

            <form>
              <div class="name">
                <label for="name"></label>
                <input type="text" placeholder="My name is" v-model="name" id="name">
                {{name}}
              </div>
              <div class="email">
                <label for="email"></label>
                <input type="email" placeholder="My e-mail is" v-model="email" id="email" required>
                {{email}}
              </div>

              <div class="password">
                <label for="password"></label>
                <input type="password" placeholder="My password is" v-model="password" id="password" required>
                {{email}}
              </div>

              <div class="submit">
                <input type="submit" value="Register" id="form_button" v-on:click="saveStatus(event)"/>
              </div>

            </form><!-- // End form -->


          </div>
      </div>

</div>
</template>

<script>
import { StitchClient } from 'mongodb-stitch'
export default {
  name: 'Stitch',
  data () {
    return {
      entries: [],
      searchResults: ''
    }
  },
  mounted: function () {
    this.loadItems()
  },
  methods: {
    loadItems: function () {
      var self = this
      let appId = 'statusstash-dnwjj'
      let stitchClient = new StitchClient(appId)

      stitchClient.login()
      .then(() => console.log('logged in as: ' + stitchClient.authedId()))
      .catch(e => console.log('error: ', e))

      let db = stitchClient.service('mongodb', 'mongodb-atlas').db('StatusStash')
      let items = db.collection('standup')
      console.log('items', items)
      // items.insertOne({ text: 'test', owner_id: stitchClient.authedId() }).then(() => {
      //
      // })
      items.find(null, null).execute().then(function (data) {
        console.log('data', data)
        self.entries = data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
