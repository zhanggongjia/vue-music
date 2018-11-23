<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        recommends: []
      }
    },
    components: {
      Slider
    },
     created() {
       console.log(123);
       
       this._getRecommend()
     },
     methods: {
       _getRecommend() {
         var _this = this
         getRecommend().then((res) => {
           if (res.code ===ERR_OK) {
             console.log(res.data.slider)
             _this.recommends = res.data.slider
           }   
         })
       }
     }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 
</style>