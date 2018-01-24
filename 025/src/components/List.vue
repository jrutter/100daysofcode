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
              <h1>Status Log</h1>

              <div v-if="!authenticated">
                You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
              </div>

              <div v-else-if="authenticated">
                <div class="card-deck mb-3 text-center">
                  <div v-for="item in entries" class="card mb-4 box-shadow">
                    <div class="card-header">
                      <h4 class="my-0 font-weight-normal">{{item.created_at | formatDate}}</h4>
                    </div>

                    <div class="card-body">
                      <ul class="list-unstyled mt-3 mb-4">
                        <li><i class="fas fa-calendar-plus"></i> Today: {{item.today | capitalize }}</li>
                        <li><i class="fas fa-calendar-check"></i> Yesterday: {{item.yesterday | capitalize }}</li>
                        <li><i class="fas fa-ban"></i> Blocker: {{item.blocker}}</li>
                      </ul>
                    </div>

                  </div>
                </div>




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
  props: ['auth', 'authenticated'],
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
