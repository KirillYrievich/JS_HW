<template>
  <ul v-if="isTags" class="breadcrumbs">
    <li v-for="item in breadcrumb" :key="item.id">
      {{ item }}
    </li>
  </ul>
  <ul v-else-if="Array.isArray(breadcrumb)" class="breadcrumbs">
    <li v-for="item in breadcrumb" :key="item.id">
      <a class="breadcrumbs__link" :href="item.link">
        {{ item.label }}
      </a>
    </li>
  </ul>
  <ul v-else class="breadcrumbs">
    <li>
      <a class="breadcrumbs__link" :href="breadcrumb.link">
        {{ breadcrumb.label }}
      </a>
    </li>
    <li v-for="item in breadcrumb.subcategory" :key="item.id">
      <a class="breadcrumbs__link" :href="item.link">
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    breadcrumb: {
      type: [Object, Array],
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
