<template>
  <div class="main">
    <div class="content_wrapper">
      <h2><icon name="bolt" scale="1.2"></icon> {{ first_header_title }}</h2>
      <div class="pure-g">
        <div class="pure-u-1-3">
          <videoitem v-for="item in items" v-bind:key="item.message"></videoitem>
        </div>
        <div class="pure-u-1-3">
          <videoitem v-for="item in items" v-bind:key="item.message"></videoitem>
        </div>
        <div class="pure-u-1-3">
          <videoitem v-for="item in items" v-bind:key="item.message"></videoitem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons'
import VideoItem from '@/components/VideoItem'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'main',
  data () {
    return {
      first_header_title: 'Your Feed',
      second_header_title: 'Trending in Canada',
      third_header_title: 'Trending Worldwide',
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' },
        { message: 'Bar' }
      ]
    }
  },
  components: {
    'videoitem': VideoItem,
    'icon': Icon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  margin-top: 12px;
}

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

.pure-g {
  margin: 0 -12px;
}
</style>
