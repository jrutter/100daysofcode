<template>
<div>
<header>
    <a href="#">Status Stash</a>
</header>

<nav-bar></nav-bar>

      <div class="container">
          <div id="content">

            <h1>Reset your password</h1>

            {{message}}

              <div class="email">
                <label for="email"></label>
                <input type="email" placeholder="My e-mail is" v-model="email" id="email" required>
              </div>

              <div class="submit">
                <input type="submit" value="Reset Password" id="form_button" v-on:click="reset(event)"/>
              </div>



          </div>
      </div>

</div>
</template>

<script>
import { StitchClient } from 'mongodb-stitch'
import NavBar from '@/components/Nav'
export default {
  name: 'Password',
  components: {
    NavBar
  },
  data () {
    return {
      email: '',
      message: ''
    }
  },
  methods: {
    reset: function () {
      var self = this
      let appId = 'statusstash-dnwjj'
      let stitchClient = new StitchClient(appId)

      stitchClient.auth.provider('userpass').sendPasswordReset(self.email)
      .then(() => {
        self.message = 'Successfully sent password reset link!'
      })
      .catch(err => {
        self.message = 'Error sending password reset link:' + err
      })
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../../sass/main.scss'
</style>
