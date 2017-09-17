<template>
  <div id="app">
    <appheader></appheader>
    <div class="full_break">
      <sidemenu class="side_menu"></sidemenu>
      <router-view class="main_view"></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import SideMenu from '@/components/Sidemenu'

export default {
  name: 'app',
  components: {
    'appheader': AppHeader,
    'sidemenu': SideMenu
  }
}
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif; 
  color: #111;
}

.full_break {
  display: flex;
}

.side_menu {
  min-width: 310px;
  background-color: rgba(255, 255, 255, 0.02);
}

.main_view {
  flex-grow: 1;
}
</style>
