<template>
  <div>
    <ul class="newest_list">
      <li class="newest_item clearfix" v-for="(item1,index) in list" :key="index">
        <a href="" target="_blank">
          <img :src="item1.img" alt="">
        </a>
        <span>{{item1.userName}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['list']
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
    height: 200px;
    width: 100%;
    border-bottom: solid 1px #ccc;
  }

  .newest_item a {
    float: left;
    display: inline-block;
    width: 50%;
  }

  .newest_item a img {
    margin: 50px 0 50px 10px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
  }

  .newest_item span {
    display: inline-block;
    float: left;
    line-height: 200px;
    padding-left: 20px;
  }

</style>
