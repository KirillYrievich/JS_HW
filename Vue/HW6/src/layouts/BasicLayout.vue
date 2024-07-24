<template>
  <HeaderLayout :menubar="menubar" />

  <slot name="main-content"></slot>

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
          { label: 'Домой', href: './' },
          { label: 'Проект', href: './project.html' },
          { label: 'Блог', href: './blog.html' }
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
