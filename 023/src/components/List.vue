<template>
<div>
  <header>
      <div class="logo"><a href="#">Daily Stash</a></div>
      <nav-bar></nav-bar>
  </header>

      <div class="container">
          <div id="content">
              <h1>Status Log</h1>

              <div v-for="item in entries" class="status-container">
                  {{item.name}}
                  <p><i class="fas fa-calendar-plus"></i> Today: {{item.today | capitalize }}</p>
                  <p><i class="fas fa-calendar-check"></i> Yesterday: {{item.yesterday | capitalize }}</p>
                  <p><i class="fas fa-ban"></i> Blocker: {{item.blocker}}</p>
                  <p><i class="fas fa-clock"></i> Date: {{item.created_at | formatDate}}</p>
              </div>
            </div>


          </div>
      </div>

</div>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/Nav'
import moment from 'moment'
export default {
  name: 'List',
  components: {
    NavBar
  },
  data () {
    return {
      entries: [],
      searchResults: '',
      profile: ''
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    formatDate: function (value) {
      if (!value) return ''
      return moment(value).format('MM/DD/YYYY hh:mm')
    }
  },
  mounted: function () {
    this.loadItems()
  },
  methods: {
    loadItems: function () {
      let self = this
      let getProfile = localStorage.getItem('userProfile')
      this.profile = JSON.parse(getProfile)
      let labKey = 'lAsBHd1474tcG5UNO_KlBFCb5nUWEtt-'
      this.items = []
      let query = '{"email":'+this.profile.name+'}'

      axios.get('https://api.mlab.com/api/1/databases/standup/collections/stash',
        {
          params: {
            apiKey: labKey,
            q: {"email": this.profile.name}
          }
        }).then(function (response) {
          self.entries = response.data
        }).catch(function (error) {
        })
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
