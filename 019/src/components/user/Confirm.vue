<template>
<div>
<header>
    <a href="#">Status Stash</a>
</header>

<nav-bar></nav-bar>

      <div class="container">
          <div id="content">

            <p>Thank you for confirming your account at Standup Stash. You can now proceed to the login page.</p>
            <p>{{message}}</p>

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
      token: this.$route.query.token,
      tokenId: this.$route.query.tokenId,
      message: ''
    }
  },
  mounted: function () {
    console.log(this.$route.query.token)
    this.confirmUser()
  },
  methods: {
    confirmUser: function (event) {
      var self = this
      let appId = 'statusstash-dnwjj'
      let stitchClient = new StitchClient(appId)

      stitchClient.auth.provider('userpass').emailConfirm(self.tokenId, self.token)
      .then(() => {
        console.log('Successfully confirmed email address!')
        self.message = 'Successfully confirmed email address!'
          /* code to direct user to log in with their newly confirmed account */
      })
      .catch(err => {
        self.message = 'Error confirming email address!'
        console.log('Error confirming email address:', err)
      })

      // stitchClient.login()
      // .then(() => console.log('logged in as: ' + stitchClient.authedId()))
      // .catch(e => console.log('error: ', e))
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../../sass/main.scss'
</style>
