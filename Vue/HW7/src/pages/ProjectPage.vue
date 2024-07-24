<template>
  <BasicLayout>
    <template #main-content>
      <HeaderPage class="page-header__project-bg" />

      <SectionContent :isColumn="true" :showTags="true">
        <PostsList :posts="filteredPosts" />

        <template #tag>
          <TagsList @filter-tag="filterByTag" :tags="tags" :selectedTag="posts.selectedTag" />
        </template>
      </SectionContent>
    </template>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue'
import SectionContent from '../components/SectionContent.vue'
import HeaderPage from '../components/HeaderPage.vue'
import PostsList from '../components/PostsList.vue'
import TagsList from '../components/TagsList.vue'

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProjectPage',
  components: {
    BasicLayout,
    SectionContent,
    HeaderPage,
    PostsList,
    TagsList
  },
  computed: {
    ...mapState('ProjectPage', ['posts']),
    ...mapGetters('ProjectPage', ['tags', 'filteredPosts'])
  },
  created() {
    this.setCurrentArticle(this.posts.articles[0])
  },
  emits: ['filter-tag'],
  methods: {
    ...mapActions('ProjectPage', ['filterByTag', 'setCurrentArticle'])
  }
}
</script>

<style lang="scss"></style>
