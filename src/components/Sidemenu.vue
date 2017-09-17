<template>
  <div class="sidemenu">
    <div class="map_holder">
        <gmap-map
            :center="center"
            :zoom="16"
            style="height:300px"
        >
            <gmap-marker v-for="(marker, index) in markers"
            :key="index"
            :position="marker.latLng"
            :clickable="true"
            />
            <!--<gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            ></gmap-marker>-->
        </gmap-map>
    </div>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import Vuex from 'vuex';
var _ = require('lodash/core');

Vue.use(Vuex);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDSVRq4ffH--eNprUEouirgWhFCI8IH6tM',
        v: '3.24',
        // libraries: 'places', //// If you need to use place input
    }
});

export default {
  name: 'sidemenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      center: {lat: 38.9424, lng: -92.3277},
      markers: []
    }
  },
  watch: {
    markers(markers) {
      if (markers.length > 2) {
        const bounds = new google.maps.LatLngBounds()
        for (let m of markers) {
          bounds.extend(m.latLng)
        }
        this.$refs.map.$mapObject.fitBounds(bounds)
      }
    }
  },
  methods: {
    generate() {
      const spread = Math.random() + 0.001

      this.center = {
        lat: 1.38 + (Math.random() - 0.5) * spread,
        lng: 103.8 + (Math.random() - 0.5) * spread,
      }

      this.markers = _.range(30)
        .map(m => ({
          latLng: {
            lat: this.center.lat + (Math.random() - 0.5) * spread,
            lng: this.center.lng + (Math.random() - 0.5) * spread,
          }
        }))
    },
    loadFromFirebase(data) {
        var myLatLng = {
            latLng: {
                lat: data.val().lat,
                lng: data.val().long
            }
        };
        //var marker = new google.maps.Marker({
        //    position: myLatLng,
        //    map: map,
        //    title: 'Watch Vune at this location',
        //    icon: 'oPin3.png'
        //});
        //google.maps.event.addListener(marker, 'click', function () {
        //    window.location.href = data.val().url;
        //});
        this.markers.push(myLatLng);
    }
  }
}

/*

var map, heatmap, heatmap2;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {
            lat: 38.9424,
            lng: -92.3277
        }
    });

    var customMapTypeId = 'custom_style';
    var customMapType = new google.maps.StyledMapType([{
        stylers: [{ hue: '#81F9FB' }, { visibility: 'simplified' }, { gamma: 0.3 }, { weight: 0.20 } ] }, { elementType: 'labels', stylers: [{ visibility: 'on' }] }, { featureType: 'water', stylers: [{ color: '#346FFF' }] }
    ], {
        name: 'Trippy'
    });
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);

    // load from fb
    var commentsRef = firebase.database().ref();
    commentsRef.on('child_added', function (data) {
        var myLatLng = {
            lat: data.val().lat,
            lng: data.val().long
        };
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Watch Vune at this location',
            icon: 'oPin3.png'
        });
        google.maps.event.addListener(marker, 'click', function () {
            window.location.href = data.val().url;
        });
    });
}
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidemenu {
    min-height: 300px;
}

.map_holder {
    height: 500px;
    min-width: 200px;
}

</style>
