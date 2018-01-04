<template>
<div>
<header>
    <a href="#">Status Stash</a>
</header>

      <div class="container">
          <div id="content">
              <h1>What's the current status?</h1>

              <ul>
                <li v-for="item in items">
                    <h3>{{ item['fields']['Date'] }}</h3>
                    <p>{{ item['fields']['User'] }}</p>
                    <p><strong>Yesterday: </strong>{{ item['fields']['Yesterday'] }}</p>
                    <p><strong>Today: </strong>{{ item['fields']['Today'] }}</p>
                    <p><strong>Blocker: </strong>{{ item['fields']['Blockers'] }}</p>
                </li>
            </ul>

          </div>
      </div>

      <footer>
      </footer>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Form',
  data () {
    return {
      items: [],
      searchResults: ''
    }
  },
  mounted: function () {
    this.loadItems()
  },
  methods: {
    loadItems: function () {
      // Init variables
      var self = this
      var appId = 'appLa5g8kT0L6oRYW'
      var appKey = 'keyDwWtp99iJuamPh'
      this.items = []

      axios.get('https://api.airtable.com/v0/' + appId + '/Status?view=Grid%20view',
        {
          headers: { Authorization: 'Bearer ' + appKey }
        }).then(function (response) {
          self.items = response.data.records
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
