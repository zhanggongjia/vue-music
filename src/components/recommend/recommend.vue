<template>
  <div class="con-silder" id="BScrollId">
    <div class="silder_ul" v-if="recommends.length>0">
        <a class="silder_li":href="item.linkUrl" v-for="item in recommends">
          <img :src="item.picUrl" alt>
        </a>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import BScroll from 'better-scroll'
import { getRecommend } from "api/recommend";

import { ERR_OK } from "api/config";

export default {
  data() {
    return {
      recommends: []
    };
  },

  methods: {
    _getREcommend() {
      var _this = this;
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          _this.recommends = res.data.slider;
          _this.$nextTick(function(){
            _this._initSlider()
          })
        }
      });
    },
    _initSlider() {
      var BScrollId = document.getElementById('BScrollId')
      this.slider = new BScroll(BScrollId,{
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: true,
        snapThreshold: 0.3,
        snapSpeed: 400
      })
    }
  },

  created() {
    this._getREcommend();
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.con-silder {
  width: 100%;
  overflow hidden
  background-color #fff
  .silder_ul {
    position relative
    display: block;
    width 2625px
    .silder_li {
      display: inline-block;
      width: 375px;
      float: left;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>