<template>
  <a v-if="isLink" class="header__logo logo" href="/">
    <img class="logo__image" :src="logoImage" alt="Interno" width="34" height="34" loading="lazy" />
    <h4 class="logo__title">Interno</h4>
  </a>
  <div v-else class="header__logo logo">
    <img class="logo__image" :src="logoImage" alt="Interno" width="34" height="34" loading="lazy" />
    <h4 class="logo__title">Interno</h4>
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
  data() {
    return {
      logoImage: '/img/icons/logo.svg'
    }
  },
  props: {
    isLink: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss"></style>
