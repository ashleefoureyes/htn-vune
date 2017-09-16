<template>
  <div class="appheader">
    <div class="content_wrapper">
        <h1>VUNE</h1>
        <div class="right_menu">
            <a class="user a_upload" href="#">Upload</a>
            <a class="user a_auth" href="#">Login / Sign Up</a>
        </div>
        <!--<img src="../assets/logo.png" class="logo">-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'appheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appheader {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 8px 0;
    background-color: #111;
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
