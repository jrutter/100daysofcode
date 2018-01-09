<template>
  <div class="checkbox-wrapper">
    <div>test</div>
    <div class="title"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return { checked: false, title: 'Check me' }
    },
    methods: {
      check () { this.checked = !this.checked }
    }
  }
</script>
