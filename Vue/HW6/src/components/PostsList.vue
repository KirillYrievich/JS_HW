<template>
  <ul class="project">
    <li v-for="item in posts" :key="item.id" class="project">
      <h3 class="project__title">{{ item.title }}</h3>

      <PostImage v-if="item.image" :article="item" />

      <p class="project__text">{{ item.text }}</p>

      <PostQuote v-if="item.quote" :quote="item.quote" />

      <div v-if="Object.keys(item.subnew).length" class="project">
        <h3 class="project__title">{{ item.subnew.title }}</h3>
        <p class="project__text">{{ item.subnew.text }}</p>

        <PostOrderedList :ordered="item.subnew.ol" />
      </div>
    </li>
  </ul>
</template>

<script>
import PostImage from './PostImage.vue'
import PostQuote from './PostQuote.vue'
import PostOrderedList from './PostOrderedList.vue'

export default {
  name: 'PostsList',
  props: {
    posts: {
      type: Array
    }
  },
  components: {
    PostImage,
    PostQuote,
    PostOrderedList
  }
}
</script>

<style scoped lang="scss"></style>
