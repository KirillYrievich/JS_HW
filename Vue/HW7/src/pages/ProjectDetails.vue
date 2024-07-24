<template>
  <BasicLayout>
    <template #main-content>
      <HeaderPage class="page-header__project-details-bg" />

      <SectionContent>
        <PostItem :post="post" />
      </SectionContent>
    </template>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue'
import SectionContent from '../components/SectionContent.vue'
import HeaderPage from '../components/HeaderPage.vue'
import PostItem from '../components/PostItem.vue'

import { mapState } from 'vuex'

export default {
  name: 'ProjectPage',
  components: {
    BasicLayout,
    SectionContent,
    HeaderPage,
    PostItem
  },
  computed: {
    ...mapState('ProjectDetails', ['post'])
  }
}
</script>

<style lang="scss"></style>
