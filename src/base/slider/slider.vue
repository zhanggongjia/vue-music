<template>
  <div class="slider" ref="slider">
  
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { addClass } from "common/js/dom";

import BScroll from "better-scroll";

export default {
  props: {
    //可以不可以循轮播

    loop: {
      type: Boolean,

      default: true
    },

    //自动轮播

    autoPlay: {
      type: Boolean,

      default: true
    },

    //轮播间隔

    interval: {
      type: Number,

      default: 4000
    }
  },

  mounted() {
    let _this = this;

    setTimeout(() => {
      _this._setSliderWidth();

      _this._initDots();

      _this._initSlider();
    }, 200);
  },

  methods: {
    _setSliderWidth(isResize) {
      this.children = this.$refs.sliderGroup.children;

      let width = 0;

      let sliderWidth = this.$refs.slider.clientWidth;

      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];

        addClass(child, "slider-item");

        child.style.width = sliderWidth + "px";

        width += sliderWidth;
      }

      if (this.loop && !isResize) {
        width += 2 * sliderWidth;
      }

      this.$refs.sliderGroup.style.width = width + "px";
    },

    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,

        scrollY: false,

        momentum: false,

        snap: true,

        snapLoop: true,

        snapThreshold: 0.3,

        snapSpeed: 400
      });
    },

    _initDots() {
      this.dots = new Array(this.children.length);
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.slider {
  min-height: 1px;

  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;

      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;

      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
</style>