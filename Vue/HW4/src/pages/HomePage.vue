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
        <ModernList />
      </SectionContent>

      <ExperianceJob />

      <SectionContent
        title="Статьи & Новости"
        description="Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы"
      >
        <NewsList :news_card="news_card" />
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
  data() {
    return {
      news_card: [
        {
          id: 1,
          title: 'Создадим лучший макет перепланировки',
          description: '26 Декабрь, 2022',
          image: '/img/articles1.png',
          link: '#',
          category: 'Дизайн Кухни'
        },
        {
          id: 2,
          title: 'Лучшие интерьерные идеи по низкой цене',
          description: '22 Декабрь, 2022',
          image: '/img/articles2.png',
          link: '#',
          category: 'Дизайн Для Жизни'
        },
        {
          id: 3,
          title: 'Лучшие интерьерные решения для офисов',
          description: '25 Декабрь, 2022',
          image: '/img/articles3.png',
          link: '#',
          category: 'Дизайн Интерьера'
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
