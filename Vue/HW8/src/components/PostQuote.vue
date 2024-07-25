<template>
  <article class="quotes">
    <img
      class="quotes__marks"
      src="/img/icons/marks.svg"
      alt="marks"
      loading="lazy"
      width="73"
      height="55"
    />
    <p class="quotes__text">{{ quote }}</p>
  </article>
</template>

<script>
export default {
  name: 'PostsList',
  props: {
    quote: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss"></style>
