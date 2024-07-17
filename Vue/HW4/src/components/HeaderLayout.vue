<template>
  <header class="header">
    <div class="header__inner container">
      <AppLogo :isLink="true" />
      <nav class="header__menu hidden-mobile">
        <ul class="header__menu-list">
          <li v-for="menu in menubar.menuItems" :key="menu.label" class="header__menu-item">
            <a class="header__menu-link" :href="menu.href">{{ menu.label }}</a>
          </li>
        </ul>
      </nav>
      <button
        class="header__burger-menu burger-button visible-mobile"
        type="button"
        onclick="mobileOverlay.showModal()"
      >
        <span class="visually-hidden">Open navigation menu</span>
      </button>
    </div>
  </header>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'

export default {
  name: 'HeaderLayout',
  props: {
    menubar: {
      type: Object,
      required: true
    }
  },
  components: {
    AppLogo
  }
}
</script>

<style scoped lang="scss"></style>
