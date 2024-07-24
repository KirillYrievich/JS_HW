<template>
  <div class="paginate">
    <ul class="paginate__list">
      <li v-for="paginate in paginates.paginateItems" :key="paginate.id" class="paginate__item">
        <a class="paginate__item" :href="paginate.link">
          <IconCircle class="paginate__link" :num="paginate.label" />
        </a>
      </li>
      <li class="paginate__item">
        <a class="paginate__item" :href="paginates.next">
          <IconCircle class="paginate__link" :isArrow="true" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import IconCircle from './IconCircle.vue'

export default {
  name: 'PaginatesList',
  props: {
    paginates: {
      type: Object
    }
  },
  components: {
    IconCircle
  }
}
</script>

<style scoped lang="scss"></style>
