<template>
<div>
<header>
    <a href="#">Status Stash</a>
</header>

<nav-bar></nav-bar>

      <div class="container">
          <div id="content">

            <h1>Sign up for an account</h1>

            {{message}}

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
                <input type="submit" value="Register" id="form_button" v-on:click="createUser(event)"/>
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
      entries: [],
      name: '',
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    createUser: function (event) {
      var self = this
      let appId = 'statusstash-dnwjj'
      let stitchClient = new StitchClient(appId)

      // stitchClient.login()
      // .then(() => console.log('logged in as: ' + stitchClient.authedId()))
      // .catch(e => console.log('error: ', e))

      stitchClient.register(self.email, self.password)
        .then(() => {
          self.message = 'Successfully sent account confirmation email!'
            /* code to direct user to check their email */
        })
        .catch(err => {
          self.message = 'Error registering new user:' + err
        })
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../../sass/main.scss'
</style>
