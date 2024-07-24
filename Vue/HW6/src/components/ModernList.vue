<template>
  <div class="modern">
    <ul class="modern__list" :class="{ 'grid grid--2': isGrid }">
      <li
        v-for="item in modern_card"
        :key="item.id"
        class="modern__item"
        :class="{ modern__rounded: isRounded }"
      >
        <article class="modern-card" :style="{ 'padding-bottom': !isGrid ? '40px' : 'unset' }">
          <img
            class="modern-card__image"
            :src="item.image"
            alt="project-photo"
            width=""
            :height="isRounded && '500px'"
            loading="lazy"
          />
          <div class="modern-card__body">
            <div class="modern-card__wrapper">
              <h5 class="modern-card__title">{{ item.title }}</h5>
              <BreadCrumb
                class="modern-card__breadcrumb"
                :breadcrumb="item.category"
                :isTags="true"
              />
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
  props: {
    modern_card: {
      type: Array,
      required: true
    },
    isRounded: {
      type: Boolean,
      default: false
    },
    isGrid: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss"></style>
