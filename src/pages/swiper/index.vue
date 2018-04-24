<template>
  <div>
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
      <div v-for="(item,index) in imaUrls" :key="item">
        <swiper-item>
          <image :src="item" alt="" class="slide-image"></image>
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imaUrls: [
          '../../static/images/img1.jpg',
          '../../static/images/img2.jpg',
          '../../static/images/img3.jpeg',
          '../../static/images/img4.jpeg'
        ]
      }
    },
    mounted () {
    }
  }
</script>
<style scoped>
  swiper-item {
    height: 150px;
    width: 640px;
  }

  swiper-item image {
    height: 100%;
    width: 100%;
    float: left;
  }

</style>
