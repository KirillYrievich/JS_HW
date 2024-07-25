<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff'
    }"
    :zoom="true"
    :navigation="true"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="swiper"
  >
    <swiper-slide v-for="(img, index) in imgs" :key="index">
      <div class="swiper-zoom-container">
        <img class="swiper__image" :src="img" loading="lazy" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Zoom, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'

import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'SwiperComp',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    imgs: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination]
    }
  }
}
</script>

<style scoped lang="scss"></style>
