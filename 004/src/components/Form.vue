<template>
<div>
<header>
    <a href="#">Show Stash</a>
</header>

      <div class="container">
          <div id="content">
              <h1>Search the DB</h1>
              <form>
                <input type="search" name="search" id="search">
                <a href="#" class="myButton">Search</a>
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
      msg: 'Lookup Form'
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
