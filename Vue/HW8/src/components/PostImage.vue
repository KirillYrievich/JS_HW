<template>
  <article class="project__article">
    <img
      class="project__image"
      :src="article.image"
      alt="maket"
      loading="lazy"
      width="799"
      height="539"
    />
    <div class="project__description">
      <p class="project__date">{{ article.date }}</p>
      <BreadcrumbsList class="project__breadcrumbs" :isTags="true" :breadcrumb="article.tags" />
    </div>
  </article>
</template>

<script>
import BreadcrumbsList from './BreadcrumbsList.vue'

export default {
  name: 'PostsList',
  props: {
    article: {
      type: Object
    }
  },
  components: {
    BreadcrumbsList
  }
}
</script>

<style scoped lang="scss"></style>
