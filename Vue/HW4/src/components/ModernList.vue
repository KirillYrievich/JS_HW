<template>
  <div class="modern">
    <ul class="modern__list grid grid--2">
      <li v-for="item in modern_card" :key="item.id" class="modern__item">
        <article class="modern-card">
          <img
            class="modern-card__image"
            :src="item.image"
            alt="kitchen"
            width="525"
            height="548"
            loading="lazy"
          />
          <div class="modern-card__body">
            <div class="modern-card__wrapper">
              <h5 class="modern-card__title">{{ item.title }}</h5>
              <BreadCrumb class="modern-card__breadcrumb" :breadcrumb="item.category" />
            </div>
            <a class="modern-card__link" :href="item.link">
              <IconCircle :isArrow="true" />
            </a>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
import IconCircle from './IconCircle.vue'
import BreadCrumb from './BreadcrumbsList.vue'

export default {
  name: 'ModernList',
  components: {
    IconCircle,
    BreadCrumb
  },
  data() {
    return {
      modern_card: [
        {
          id: 1,
          title: 'Современная кухня',
          image: '/img/kitchen1.png',
          link: '#',
          category: {
            label: 'Декор',
            link: '#',
            subcategory: [
              {
                label: 'Планировка',
                link: '#'
              }
            ]
          }
        },
        {
          id: 2,
          title: 'Современная кухня',
          image: '/img/kitchen2.png',
          link: '#',
          category: {
            label: 'Декор',
            link: '#',
            subcategory: [
              {
                label: 'Планировка',
                link: '#'
              }
            ]
          }
        },
        {
          id: 3,
          title: 'Современная кухня',
          image: '/img/kitchen3.png',
          link: '#',
          category: {
            label: 'Декор',
            link: '#',
            subcategory: [
              {
                label: 'Планировка',
                link: '#'
              }
            ]
          }
        },
        {
          id: 4,
          title: 'Современная кухня',
          image: '/img/kitchen4.png',
          link: '#',
          category: {
            label: 'Декор',
            link: '#',
            subcategory: [
              {
                label: 'Планировка',
                link: '#'
              }
            ]
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
