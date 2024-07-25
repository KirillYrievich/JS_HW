<template>
  <div class="last-new">
    <img
      class="last-new__image"
      :src="new_post.image"
      width="569"
      height="478"
      loading="lazy"
      alt="aritcle"
    />
    <div class="last-new__body">
      <h5 class="last-new__title">{{ new_post.title }}</h5>
      <p class="last-new__description">{{ new_post.text }}</p>
      <div class="last-new__footer">
        <p class="last-new__date">{{ new_post.description }}</p>
        <a class="last-new__link" :href="new_post.link">
          <IconCircle :isArrow="true" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IconCircle from './IconCircle.vue'

export default {
  name: 'NewsView',
  components: {
    IconCircle
  },
  props: {
    new_post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss"></style>
