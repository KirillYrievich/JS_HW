<template>
  <div class="project">
    <h3 class="project__title">{{ post.title }}</h3>

    <PostImage v-if="post.image" :article="post" />

    <p class="project__text">{{ post.text }}</p>

    <PostQuote v-if="post.quote" :quote="post.quote" />

    <SwiperComp v-if="post.swiper" :imgs="post.swiper" />

    <div v-if="post.subnew && Object.keys(post.subnew).length" class="project">
      <h3 class="project__title">{{ post.subnew.title }}</h3>
      <p class="project__text">{{ post.subnew.text }}</p>

      <PostOrderedList :ordered="post.subnew.ol" />
    </div>
  </div>
</template>

<script>
import PostImage from './PostImage.vue'
import PostQuote from './PostQuote.vue'
import PostOrderedList from './PostOrderedList.vue'
import SwiperComp from './SwiperComp.vue'

export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    PostImage,
    PostQuote,
    PostOrderedList,
    SwiperComp
  }
}
</script>

<style scoped lang="scss"></style>
