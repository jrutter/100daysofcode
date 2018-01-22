<template>
  <div id="app">
    <router-view
        :auth="auth"
        :authenticated="authenticated">
      </router-view>
  </div>
</template>

<script>
import AuthService from './services/AuthService'

const auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style lang="scss" scoped>
   @import './sass/main.scss'
</style>
