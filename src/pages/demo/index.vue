<template>
  <div>
    <sw :imaurls="imaUrls"></sw>
    <comlist :list="listitem"></comlist>
    <scroll-view scroll-y='true' bindscrolltolower='lower'></scroll-view>
  </div>
</template>

<script>
  import sw from '@/components/swiper'
  import comlist from '@/components/comlist'

  export default {
    data () {
      return {
        imaUrls: [
          '../../static/images/img1.jpg',
          '../../static/images/img2.jpg',
          '../../static/images/img3.jpeg',
          '../../static/images/img4.jpeg'
        ],
        listitem: [
          {
            img: '../../static/images/img5.jpg',
            userName: '1111'
          }, {
            img: '../../static/images/img5.jpg',
            userName: '2222'
          }, {
            img: '../../static/images/img5.jpg',
            userName: '3333'
          }
        ]
      }
    },
    methods () {
    },
    components: {
      sw,
      comlist
    }
  }
</script>

