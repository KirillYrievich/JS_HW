<template>
  <BasicLayout>
    <template #main-content>
      <SectionContent>
        <HeroMain />
      </SectionContent>

      <SectionContent
        title="Следите за нашими проектами"
        description="Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы"
      >
        <ModernList :isGrid="true" :isRounded="true" :modern_card="modernCards" />
      </SectionContent>

      <ExperianceJob />

      <SectionContent
        title="Статьи & Новости"
        description="Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы"
      >
        <NewsList :news_card="newsCards" />
      </SectionContent>
    </template>
  </BasicLayout>
</template>

<script>
import BasicLayout from '../layouts/BasicLayout.vue'
import HeroMain from '../components/HeroMain.vue'
import SectionContent from '../components/SectionContent.vue'
import ModernList from '../components/ModernList.vue'
import NewsList from '../components/NewsList.vue'
import ExperianceJob from '../components/ExperianceJob.vue'

import { mapState } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    BasicLayout,
    HeroMain,
    SectionContent,
    ModernList,
    NewsList,
    ExperianceJob
  },
  computed: {
    ...mapState('HomePage', ['newsCards', 'modernCards'])
  }
}
</script>

<style lang="scss"></style>
