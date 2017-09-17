// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App ref="main"/>',
  components: { App }
})

var config = {
  apiKey: "AIzaSyDma41hyffvR2mc7EGxmSvPFnmuHppTW2k",
  authDomain: "hot-spot-40dff.firebaseapp.com",
  databaseURL: "https://hot-spot-40dff.firebaseio.com",
  projectId: "hot-spot-40dff",
  storageBucket: "hot-spot-40dff.appspot.com",
  messagingSenderId: "1018402745301"
};
firebase.initializeApp(config);

var commentsRef = firebase.database().ref();
commentsRef.on('child_added', function (data) {
  vm.$refs.main.$refs.menu.loadFromFirebase(data);
});