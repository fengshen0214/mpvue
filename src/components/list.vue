<template>
  <div class="newest_list clearfix">
    <dl class="newest_item" v-for="(item1,index) in listitem" :key="index">
      <dt>
        <a href="" target="_blank">
          <img :src="item1.img" alt="">
        </a>
      </dt>
      <dd>{{item1.userName}}</dd>
    </dl>
  </div>
</template>
<script>
  export default {
    props: ['listitem']
  }
</script>
<style>
  .clearfix:before, .clearfix:after {
    content: "";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .newest_list {
    height: 500px;
  }

  .newest_item {
    height: 50px;
    width: 100%;
  }

  .newest_item dt {
    float: left;

  }

  .newest_item dt img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }

  .newest_item dd {
    float: left;
    line-height: 30px;
  }
</style>
