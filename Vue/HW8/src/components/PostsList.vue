<template>
  <ul class="project">
    <PostItem v-for="item in posts" :key="item.id" :post="item" />
  </ul>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
  name: 'PostsList',
  props: {
    posts: {
      type: Array
    }
  },
  components: {
    PostItem
  }
}
</script>

<style scoped lang="scss"></style>
