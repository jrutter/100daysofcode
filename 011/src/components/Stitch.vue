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
                    <p>Today: {{item.today}}</p>
                    <p>Yesterday: {{item.yesterday}}</p>
                    <p>Blocker: {{item.blocker}}</p>
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
  name: 'Stitch',
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
