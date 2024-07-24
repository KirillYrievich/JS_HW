<template>
  <BasicLayout>
    <template #main-content>
      <HeaderPage class="page-header__category-bg" :pageHeader="pageHeader" />

      <SectionContent :showPagination="true" :showTabsList="true">
        <template #tabList
          ><TabsList
            @filter-category="filterByCategory"
            :category="category"
            :selectedTabs="projects.selectedTabs"
        /></template>

        <ModernList :modern_card="filteredProjects" />

        <template #paginate><PaginatesList :paginates="paginates" /></template>
      </SectionContent>
    </template>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue'
import SectionContent from '../components/SectionContent.vue'
import HeaderPage from '../components/HeaderPage.vue'
import PaginatesList from '../components/PaginatesList.vue'
import TabsList from '../components/TabsList.vue'
import ModernList from '../components/ModernList.vue'

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'CategoryPage',
  components: {
    BasicLayout,
    SectionContent,
    HeaderPage,
    PaginatesList,
    TabsList,
    ModernList
  },
  computed: {
    ...mapState('CategoryPage', ['projects', 'pageHeader', 'paginates']),
    ...mapGetters('CategoryPage', ['category', 'filteredProjects'])
  },
  emits: ['filter-category'],
  methods: {
    ...mapActions('CategoryPage', ['filterByCategory'])
  }
}
</script>

<style lang="scss"></style>
