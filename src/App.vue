<template>
  <div id="app">
    <appheader></appheader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'

export default {
  name: 'app',
  components: {
    'appheader': AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif; 
  color: #111;
}
</style>
