<template>
  <div class="news">
    <ul class="news__list grid grid--3">
      <li v-for="item in news_card" :key="item.id" class="news__item">
        <a :href="item.link">
          <article class="news-card">
            <img
              class="news-card__image"
              :src="item.image"
              alt="article"
              width="340"
              height="290"
              loading="lazy"
            />
            <h5 class="news-card__title">{{ item.title }}</h5>
            <div class="news-card__body">
              <p class="news-card__description">{{ item.description }}</p>
              <p class="news-card__link">
                <IconCircle :isArrow="true" />
              </p>
            </div>
            <p class="news-card__category">{{ item.category }}</p>
          </article>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import IconCircle from './IconCircle.vue'

export default {
  name: 'NewsList',
  components: {
    IconCircle
  },
  props: {
    news_card: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
