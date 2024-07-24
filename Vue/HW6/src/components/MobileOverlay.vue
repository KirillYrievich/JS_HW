<template>
  <dialog class="mobile-overlay visible-mobile" id="mobileOverlay">
    <form class="mobile-overlay__close-button-wrapper" method="dialog">
      <button class="mobile-overlay__close-button cross-button" type="submit">
        <span class="visually-hidden">Закрыть меню</span>
      </button>
    </form>
    <div class="mobile-overlay__body">
      <ul class="mobile-overlay__list">
        <li v-for="menu in menubar.menuItems" :key="menu.label" class="mobile-overlay__item">
          <a class="mobile-overlay__link" :href="menu.href">{{ menu.label }}</a>
        </li>
      </ul>
    </div>
  </dialog>
</template>

<script>
export default {
  name: 'MobileOverlay',
  props: {
    menubar: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss"></style>
