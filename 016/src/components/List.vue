<template>
<div>
<header>
    <a href="#">Status Stash</a>
</header>

<nav-bar></nav-bar>

      <div class="container">
          <div id="content">
              <h1>Status Log</h1>

              <ul>
                <li v-for="item in entries">
                    <h3>{{item.email}}</h3>
                    <p><i class="fas fa-calendar-plus"></i> Today: {{item.today}}</p>
                    <p><i class="fas fa-calendar-check"></i> Yesterday: {{item.yesterday}}</p>
                    <p><i class="fas fa-ban"></i> Blocker: {{item.blocker}}</p>
                </li>
            </ul>


          </div>
      </div>

</div>
</template>

<script>
import { StitchClient } from 'mongodb-stitch'
import NavBar from '@/components/Nav'
export default {
  name: 'List',
  components: {
    NavBar
  },
  data () {
    return {
      entries: [],
      searchResults: ''
    }
  },
  mounted: function () {
    this.loadItems()
    console.log('logged in as: ' + stitchClient.authedId())
  },
  methods: {
    loadItems: function () {
      var self = this
      let appId = 'statusstash-dnwjj'
      let stitchClient = new StitchClient(appId)
      // stitchClient.login().then(displayEntries);

      stitchClient.login()
      .then(() => console.log('logged in as: ' + stitchClient.authedId()))
      .catch(e => console.log('error: ', e))
      // let db = stitchClient.service('mongodb', 'mongodb-atlas').db('StatusStash')
    },
    displayEntries: function () {
      const db = client.service('mongodb', 'mongodb-atlas').db('StatusStash');
      let items = db.collection('standup')
      items.find({ email: 'jake@onerutter.com' }).execute().then(function (data) {
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
