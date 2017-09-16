<template>
  <div class="videoitem">
    <img src="../assets/thumbnails/1.jpg" class="logo">
    <div class="vid_info">
        <h2>{{ video_title }}</h2>
        <p>{{ video_description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoitem',
  data () {
    return {
      msg: '1',
      video_title: "Vine about Boats",
      video_description: "You'll never see this coming..."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.videoitem {
    margin: 0;
    min-height: 84px;
    display: inline-block;
    padding: 12px 26px 12px 12px;
    cursor: pointer;
} .videoitem:hover {
    background-color: rgba(255, 255, 255, 0.02);
}

h2 {
    margin: 6px 0 0;
    font-size: 18px;
    display: inline-block;
}

p {
    padding: 5px 1px;
    font-size: 14px;
    color: #a2a2a2;
    margin: 0;
}

img {
    max-height: 84px;
    float: left;
}

.vid_info {
    display: inline-block;
    padding-left: 12px;
}

</style>
