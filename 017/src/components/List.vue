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
import axios from 'axios'
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
  },
  methods: {
    loadItems: function () {
      var self = this
      var apiKey = 'lAsBHd1474tcG5UNO_KlBFCb5nUWEtt-'
      this.items = []

      axios.get('https://api.mlab.com/api/1/databases/standup/collections/stash?apiKey=' + apiKey,
        {
          // headers: { Authorization: 'Bearer ' + appKey }
        }).then(function (response) {
          console.log('response',response)
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
