<template>
<div class="container">
<h1>{{ msg }}</h1>
    <div class="game-board">

      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
      <div class="box">8</div>
      <div class="box">9</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'CSS Grid Layout'
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../sass/main.scss'
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
width:960px;
margin:0 auto;
}
.game-board
{
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    grid-gap: 1em;
}

.box {
  background: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #AAA;
}



</style>
