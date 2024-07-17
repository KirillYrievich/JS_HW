<template>
  <div class="hero hero-bg">
    <div class="hero__body">
      <h2 class="hero__title">Пусть ваш дом будет уникальным</h2>
      <div class="hero__description">
        <p>Существует много вариаций Lorem Ipsum, которые можно использовать</p>
      </div>
      <ButtonBlacked class="hero__button">
        <span>Начать</span>
        <svg
          class="hero__arrow"
          fill="none"
          viewBox="0 0 24 24"
          height="17"
          width="19"
          stroke-width="2"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </ButtonBlacked>
    </div>
  </div>
</template>

<script>
import ButtonBlacked from '@/components/ButtonBlacked.vue'

export default {
  name: 'HeroMain',
  components: {
    ButtonBlacked
  }
}
</script>

<style scoped lang="scss"></style>
