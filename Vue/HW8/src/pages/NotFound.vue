<template>
  <section class="section">
    <div class="not-found-bg">
      <div class="not-found container">
        <h1 class="not-found__title">404</h1>
        <div class="not-found__description">
          <p>Приносим извинения, но страница, которую вы искали, не найдена</p>
        </div>
        <router-link to="/"
          ><ButtonBlacked class="not-found__button">
            <span>Домой</span>
            <svg
              class="not-found__arrow"
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
            </svg> </ButtonBlacked
        ></router-link>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonBlacked from '@/components/ButtonBlacked.vue'

export default {
  name: 'NotFound',
  components: {
    ButtonBlacked
  }
}
</script>

<style lang="scss"></style>
