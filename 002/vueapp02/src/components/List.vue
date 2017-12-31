<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <ul>
        <li v-for="todo in todos">
          <input type="checkbox"/> {{todo.item}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      todos: [
        {id: 0, item: 'Pick up Milk'},
        {id: 1, item: 'Pick up Cheese'},
        {id: 2, item: 'Pick up Dishwashing Liquid'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
