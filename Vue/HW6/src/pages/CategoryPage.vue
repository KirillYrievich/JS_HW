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
  data() {
    return {
      pageHeader: {
        title: 'Наш проект',
        links: [
          {
            label: 'Домой',
            link: './index.html'
          },
          {
            label: 'Проект',
            link: './project.html'
          }
        ]
      },
      projects: {
        articles: [
          {
            id: 1,
            title: 'Современная кухня',
            image: '/img/kitchen1.png',
            link: '#',
            category: ['Кухня']
          },
          {
            id: 2,
            title: 'Современная Гостинная',
            image: '/img/kitchen2.png',
            link: '#',
            category: ['Гостинная']
          },
          {
            id: 3,
            title: 'Современная Гостинная',
            image: '/img/kitchen3.png',
            link: '#',
            category: ['Гостинная']
          },
          {
            id: 4,
            title: 'Современная Гостинная',
            image: '/img/kitchen4.png',
            link: '#',
            category: ['Гостинная']
          },
          {
            id: 5,
            title: 'Комфортная Ванная комната',
            image: '/img/bathroom1.jpg',
            link: '#',
            category: ['Ванная комната']
          },
          {
            id: 6,
            title: 'Комфортная Ванная комната',
            image: '/img/bathroom2.jpg',
            link: '#',
            category: ['Ванная комната']
          },
          {
            id: 7,
            title: 'Комфортная Ванная комната',
            image: '/img/bathroom3.jpg',
            link: '#',
            category: ['Ванная комната']
          },
          {
            id: 8,
            title: 'Комфортная Ванная комната',
            image: '/img/bathroom4.jpeg',
            link: '#',
            category: ['Ванная комната']
          },
          {
            id: 9,
            title: 'Комфортная Ванная комната',
            image: '/img/bathroom5.jpg',
            link: '#',
            category: ['Ванная комната']
          },
          {
            id: 10,
            title: 'Минималистичная спальня',
            image: '/img/spalna1.png',
            link: '#',
            category: ['Спальня']
          },
          {
            id: 11,
            title: 'Минималистичная спальня',
            image: '/img/spalna2.png',
            link: '#',
            category: ['Спальня']
          },
          {
            id: 12,
            title: 'Минималистичная спальня',
            image: '/img/spalna3.png',
            link: '#',
            category: ['Спальня']
          },
          {
            id: 13,
            title: 'Минималистичная спальня',
            image: '/img/spalna4.png',
            link: '#',
            category: ['Спальня']
          }
        ],
        selectedTabs: null
      },
      paginates: {
        paginateItems: [
          {
            label: '01',
            link: '#'
          },
          {
            label: '02',
            link: '#'
          },
          {
            label: '03',
            link: '#'
          }
        ],
        next: '#'
      }
    }
  },
  computed: {
    category() {
      return [...new Set(this.projects.articles.flatMap(a => a.category))]
    },
    filteredProjects() {
      return this.projects.selectedTabs
        ? this.projects.articles.filter(a => a.category.includes(this.projects.selectedTabs))
        : this.projects.articles
    }
  },
  emits: ['filter-category'],
  methods: {
    filterByCategory(category) {
      this.projects.selectedTabs = category
    }
  },
  created() {
    this.projects.selectedTabs = this.category[0]
  }
}
</script>

<style lang="scss"></style>
