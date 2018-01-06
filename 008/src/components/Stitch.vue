<template>
<div>
<header>
    <a href="#">Status Stash</a>
</header>

      <div class="container">
          <div id="content">
              <h1>Add your status</h1>


          </div>
      </div>

      <footer>
        <ul>
          <li><a href="/#/">Home</a></li>
          <li><a href="/#/stitch">Stitch</a></li>
        </ul>
      </footer>
</div>
</template>

<script>
import { StitchClient } from 'mongodb-stitch'
export default {
  name: 'Stitch',
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
      let appId = 'statusstash-dnwjj'
      let stitchClient = new StitchClient(appId)

      stitchClient.login()
      .then(() => console.log('logged in as: ' + stitchClient.authedId()))
      .catch(e => console.log('error: ', e))
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
