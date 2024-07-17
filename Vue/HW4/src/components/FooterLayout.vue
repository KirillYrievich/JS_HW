<template>
  <footer class="footer">
    <div class="footer__inner container grid grid--3">
      <AppLogo :isLink="false" />
      <nav class="footer__menu">
        <h5 class="footer__menu-title">Страницы</h5>
        <ul class="footer__menu-list">
          <li v-for="menu in menubar.menuItems" :key="menu.label" class="footer__menu-item">
            <a class="footer__menu-link" :href="menu.href">{{ menu.label }}</a>
          </li>
        </ul>
      </nav>
      <div class="footer__contacts">
        <h5 class="footer__menu-title">Контакты</h5>
        <ul class="footer__menu-list">
          <li class="footer__contacts-item">55 East Birchwood Ave. Brooklyn, New York 11201</li>
          <li class="footer__contacts-item">contact@interno.com</li>
          <li class="footer__contacts-item">(123) 456 - 7890</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'

export default {
  name: 'FooterLayout',
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
