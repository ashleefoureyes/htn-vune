<template>
  <div class="appheader">
    <!--<div class="content_wrapper">-->
    <div class="hamburger_wrapper">
        <icon name="bars" scale="1"></icon>
    </div>
    <div class="wrapper">
        <h1>VUNE</h1>
        <div class="right_menu">
            <a class="user a_upload" href="#">Upload</a>
            <a class="user a_auth" href="#">Login / Sign Up</a>
        </div>
        <!--<img src="../assets/logo.png" class="logo">-->
    </div>
  </div>
  <!--</div>-->
</template>

<script>
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'appheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'icon': Icon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appheader {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 8px 0;
    background-color: #111;
    box-shadow: 0 0 15px rgba(255, 255, 255, .05);
}

.right_menu {
    float: right;
}

a {
    color: #f6f6f6;
    display: inline-block;
    text-decoration: none;
    font-size: 15px;
    padding: 12px 14px 12px 48px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    background-repeat: no-repeat;
    background-position-x: 9px;
    background-position-y: center;
} a:hover {
    background-color: rgba(255, 255, 255, 0.1);
} .a_upload {
    background-image: url('../assets/upload.png');
} .a_auth {
    background-color: rgba(88, 189, 255, .3);
    background-color: rgba(47, 247, 151, .3);
    background-image: url('../assets/user.png');
} .a_auth:hover {
    background-color: rgba(88, 189, 255, .37);
    background-color: rgba(47, 247, 151, .37);
}

.hamburger_wrapper {
    display: inline-block;
    color: #e7e7e7;
    margin: -8px 6px -8px 0;
    min-width: 48px;
    padding-right: 14px;
    text-align: center;
    position: relative;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
} .hamburger_wrapper svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

h1 svg {
    position: relative;
    top: 1px;
    padding-right: 5px;
    vertical-align: text-top;
}

h1 {
  font-size: 29px;
  display: inline-block;
  letter-spacing: -2px;
  margin: 0;
  padding: 4px;
  font-family: 'Montserrat', sans-serif;
  background: -webkit-linear-gradient(left, #2ff797, #58bdff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
