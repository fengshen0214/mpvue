<template>
  <div>
    <div>
      <sw :imaurls="imaUrls"></sw>
    </div>
    <div>
      <list :listitem="listitem"></list>
    </div>
  </div>
</template>

<script>
  import sw from '@/components/swiper'
  import list from '@/components/list'
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
            img: '../../static/images/img5.jpeg',
            userName: '鹿晗'
          }, {
            img: '../../static/images/img5.jpeg',
            userName: '张艺兴'
          }
        ]
      }
    },
    components: {
      sw, list
    }
  }
</script>
