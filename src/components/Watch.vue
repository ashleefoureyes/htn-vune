<template>
  <div class="watch">
    <div class="content_wrapper">
      <div class="pure-g">
        <div class="pure-u-2-3">
          <div class="video_wrapper">
            <video controls>
                <source src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
        <div class="pure-u-1-3">
          <h2><icon name="bolt" scale="1.2"></icon> {{ first_header_title }}</h2>
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
  name: 'watch',
  data () {
    return {
      first_header_title: 'Recommended',
      second_header_title: 'Trending in Canada',
      third_header_title: 'Trending Worldwide',
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
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
.video_wrapper {
    display: flex;    
} .video_wrapper video{
    flex-grow: 1;
}

.watch {
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
