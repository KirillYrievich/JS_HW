<template>
  <BasicLayout>
    <template #main-content>
      <HeaderPage class="page-header__blog-bg" :pageHeader="pageHeader" />

      <SectionContent subtitle="Последний пост">
        <NewView :new_post="newsPost" />
      </SectionContent>

      <SectionContent subtitle="Статьи & Новости" :showPagination="true">
        <NewsList :news_card="newsCards" />

        <template #paginate><PaginatesList :paginates="paginates" /></template>
      </SectionContent>
    </template>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue'
import SectionContent from '../components/SectionContent.vue'
import NewsList from '../components/NewsList.vue'
import NewView from '../components/NewView.vue'
import HeaderPage from '../components/HeaderPage.vue'
import PaginatesList from '../components/PaginatesList.vue'

import { mapState } from 'vuex'

export default {
  name: 'BlogPage',
  components: {
    BasicLayout,
    SectionContent,
    HeaderPage,
    NewView,
    NewsList,
    PaginatesList
  },
  computed: {
    ...mapState('BlogPage', ['pageHeader', 'newsPost', 'newsCards', 'paginates'])
  }
}
</script>

<style lang="scss"></style>
