<template>
<div>
<header>
    <a href="#">Status Stash</a>
</header>

<nav-bar></nav-bar>

      <div class="container">
          <div id="content">

            <h1>Log in to your account</h1>

            {{message}}

              <div class="email">
                <label for="email"></label>
                <input type="email" placeholder="My e-mail is" v-model="email" id="email" required>
              </div>

              <div class="password">
                <label for="password"></label>
                <input type="password" placeholder="My password is" v-model="password" id="password" required>
              </div>

              <div class="submit">
                <input type="submit" value="Log in" id="form_button" v-on:click="login(event)"/>
              </div>



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
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    login: function () {
      var self = this
      let appId = 'statusstash-dnwjj'
      let stitchClient = new StitchClient(appId)

      stitchClient.login(self.email, self.password)
      .then(userId => {
        self.message = 'Successfully logged in as user'
        console.log('Successfully logged in as user', userId)
      })
      .catch(err => {
        self.message = 'Error logging in with email/password auth'
        console.log('Error logging in with email/password auth:', err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../../sass/main.scss'
</style>
