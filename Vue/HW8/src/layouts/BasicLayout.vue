<template>
  <HeaderLayout :menubar="menubar" />

  <slot name="main-content">
    <router-view />
  </slot>

  <FooterLayout :menubar="menubar" />

  <MobileOverlay :menubar="menubar" />
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'
import MobileOverlay from '@/components/MobileOverlay.vue'

export default {
  name: 'BasicLayout',
  data() {
    return {
      menubar: {
        menuItems: [
          { label: 'Домой', link: './' },
          { label: 'Проект', link: './project' },
          { label: 'Блог', link: './blog' }
        ]
      }
    }
  },
  components: {
    HeaderLayout,
    FooterLayout,
    MobileOverlay
  }
}
</script>

<style scoped lang="scss"></style>
