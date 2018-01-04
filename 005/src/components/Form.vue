<template>
<div>
<header>
    <a href="#">Show Stash</a>
</header>

      <div class="container">
          <div id="content">
              <h1>Search the DB</h1>
              <form>
                <input type="search" v-model="search" name="search" id="search">
                <a href="#" class="myButton" v-on:click="getSetlist()">Search</a>
              </form>
          </div>
      </div>

      <footer>
          <ul>
              <li>
                  <span>Find the Show</span>
              </li>
              <li>
                  <span>Get A Match</span>
              </li>
              <li>
                  <span>Add it to your stash</span>
              </li>
          </ul>
      </footer>
</div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    getSetlist: function (event) {
      // `this` inside methods points to the Vue instance
      // alert('You searched for ' + this.search + '!')
      // `event` is the native DOM event
      // if (event) {
      //   alert(event.target.tagName)
      // }
      this.$http
          .get('http://localhost:3001/api/random-quote', (data) => {
            this.quote = data;
          })
          .error((err) => console.log(err))
      }

    },

  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
