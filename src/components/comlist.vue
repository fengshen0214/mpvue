<template>
  <div>
    <scroll-view scroll-y="true" style="height: 200px">
      <ul class="newest_list1">
        <li class="newest_item clearfix" v-for="(item,index) in list" :key="index">
          <a href="" target="_blank">
            <img :src="item.img" alt="">
          </a>
          <span>{{item.userName}}</span>
        </li>
      </ul>
    </scroll-view>

    <scroll-view scroll-X="true" class="newest_list2Main" style="">
      <ul class="newest_list2">
        <li v-for="(itemd,index) in listdemo" :key="index"><a :href="itemd.url">{{itemd.text}}</a></li>
      </ul>
    </scroll-view>
  </div>
</template>
<script>
  export default {
    props: ['list', 'listdemo']
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

  .newest_list1 {
    height: 500px;
  }

  .newest_list2Main {
    white-space: nowrap;
    display: flex;
    border-bottom: solid 1px #a092cc;
    padding: 10px 0;
  }

  .newest_list2 {
    width: 100%;
  }

  .newest_list2 li {
    width: auto;
    display: inline-block;
  }

  .newest_list2 li a {
    margin: 0 10px;
    padding: 4px;
    background: #a5ffc5;
    border-radius: 4px;
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
