<template>
  <div id="app">
    <appheader></appheader>
    <div class="full_break">
      <sidemenu class="side_menu" ref="menu"></sidemenu>
      <router-view class="main_view"></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header';
import SideMenu from '@/components/Sidemenu';
import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default {
  name: 'app',
  components: {
    'appheader': AppHeader,
    'sidemenu': SideMenu
  },
  methods: {
    loadFromFirebase(data) {
      
    }
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
