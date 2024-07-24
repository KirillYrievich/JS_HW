<template>
  <main class="page-header">
    <section v-if="pageHeader" class="container page-header__body">
      <header class="page-header__header">
        <h3 class="page-header__title">{{ pageHeader.title }}</h3>
        <BreadcrumbsList class="page-header__breadcrumbs" :breadcrumb="pageHeader.links" />
      </header>
    </section>
  </main>
</template>

<script>
import BreadcrumbsList from './BreadcrumbsList.vue'

export default {
  name: 'HeaderPage',
  props: {
    pageHeader: {
      type: Object
    }
  },
  components: {
    BreadcrumbsList
  }
}
</script>

<style scoped lang="scss"></style>
