<template>
  <div id="app">
    <button @click="subFn">hmac_mdf5</button>
  </div>
</template>
<script>
  import CryptoJS from 'crypto-js'
  import { objKeySort } from '@/utils/index'
  export default {
    data() {
      return {
        obj: {ba: 1, _a1: 2, b_3: 3, b1_1: 4, ab: 1, aa: 2, a__: 3, a_1: 4, A: 4}
      }
    },
    methods: {
      subFn() {
        var json = objKeySort(this.obj);
        var hmac_md5Res = '';
        for (let key in json) {
          hmac_md5Res += hmac_md5Res ? '&' + key + '=' + json[key] : key + '=' + json[key];
        }
        var res = CryptoJS.HmacMD5(hmac_md5Res, 'e44adb122f60a4402d1218c9ce614bc4').toString(CryptoJS.enc.Hex);
        console.log('前端按照排序(升序)后:' + hmac_md5Res);
        console.log('后端按照排序(升序)后:A=4&_a1=2&a_1=4&a__=3&aa=2&ab=1&b1_1=4&b_3=3&ba=1');
        console.log('前端sign:' + res);
        console.log('后端sign:ef778bef46340c411a6e13248cd26c85')
      }
    }
  }
</script>
<style>
</style>
