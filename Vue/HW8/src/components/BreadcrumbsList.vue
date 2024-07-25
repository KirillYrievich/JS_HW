<template>
  <ul v-if="isTags" class="breadcrumbs">
    <li v-for="(item, index) in breadcrumb" :key="index">
      {{ item }}
    </li>
  </ul>
  <ul v-else class="breadcrumbs">
    <li v-for="(item, index) in breadcrumb" :key="index">
      <a class="breadcrumbs__link" :href="item.link">
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>
c

<script>
export default {
  name: 'BreadCrumb',
  props: {
    breadcrumb: {
      type: Array,
      required: true
    },
    isTags: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss"></style>
